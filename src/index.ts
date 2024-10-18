import {
  ActionEvent,
  BlockTriggerEvent,
  EthLog,
} from "@openzeppelin/defender-sdk-action-client";
import { utils, BigNumber, BigNumberish } from "ethers";

import axios from "axios";

export const sharedState: Record<string, UserOpProcessedEventParams[]> = {};

// Identifier for UserOperationEvent event
// = keccak256(abi.encodePacked("UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)"))
const userOperationEventId = utils.hexlify(
  "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f"
);

// Identifier for UserOpProcessed event
// = keccak256(abi.encodePacked("UserOpProcessed(bytes32,address,bytes32,uint8,uint256,address,uint256,address,bool)"))
const userOpProcessedId = utils.hexlify(
  "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9"
);

// Paymaster operation modes
enum PaymasterMode {
  Sponsor,
  ChargeInPostOp,
}

// Structure for UserOperationEvent event
interface UserOpEventParams {
  userOpHash: string; // bytes32
  sender: string; // address
  paymaster: string; // address
  nonce: BigNumberish; // uint256
  success: boolean; // bool
  actualGasCost: BigNumberish; // uint256
  actualGasUsed: BigNumberish; // uint256
}

// Structure for UserOpProcessed event
export interface UserOpProcessedEventParams {
  userOpHash: string; // bytes32
  userOpSender: string; // address
  signerDataHash: string; // bytes32
  mode: PaymasterMode; // uint8
  actualGasCost: BigNumberish; // uint256
  token: string; // address
  actualTokenCost: BigNumberish; // uint256
  chargeFrom: string; // address
  chargeSuccessful: boolean; // bool
}

// Logs JSON data, converting BigInt to string
const jsonStringify = (data: any): string => {
  return JSON.stringify(
    data,
    (_, value) => {
      return BigNumber.isBigNumber(value) ? `${value.toHexString()}` : value;
    },
    2
  );
};

// Prints JSON data to console with a title
const printJson = (title: string, data: Object) => {
  console.log(`${title}: ${jsonStringify(data)}`);
};

// Decodes the UserOperationEvent event from logs
const parseUserOpEvent = (params: {
  logs: EthLog[];
  filterUserOpHashes?: string[];
  filterPaymasters?: string[];
}): UserOpEventParams[] => {
  const eventLogs = params.logs.filter(
    (log) => utils.hexlify(log.topics[0]) === userOperationEventId
  );

  // Log warning if no matching events are found
  if (eventLogs.length === 0) {
    console.warn(`UserOperationEvent not found`);
    return [];
  }

  // Use reduce to accumulate valid events
  const decodedUserOpEvents = eventLogs.reduce<UserOpEventParams[]>(
    (userOps, eventLog) => {
      const userOpHash = utils.hexlify(eventLog.topics[1]);

      // Skip if the userOpHash doesn't match the filter
      if (
        params.filterUserOpHashes &&
        !params.filterUserOpHashes.includes(userOpHash)
      ) {
        return userOps;
      }

      const sender = utils.getAddress("0x" + eventLog.topics[2].slice(26));
      const paymaster = utils.getAddress("0x" + eventLog.topics[3].slice(26));

      // Skip if the paymaster doesn't match the filter
      if (
        params.filterPaymasters &&
        !params.filterPaymasters.includes(paymaster)
      ) {
        return userOps;
      }

      const [nonce, success, actualGasCost, actualGasUsed] =
        utils.defaultAbiCoder.decode(
          ["uint256", "bool", "uint256", "uint256"],
          eventLog.data
        );

      // Push valid event to result
      userOps.push({
        userOpHash,
        sender,
        paymaster,
        nonce: BigNumber.from(nonce),
        success,
        actualGasCost: BigNumber.from(actualGasCost),
        actualGasUsed: BigNumber.from(actualGasUsed),
      });

      return userOps;
    },
    []
  );

  if (decodedUserOpEvents.length === 0) {
    console.warn(`No matching UserOperationEvent found`);
  }
  return decodedUserOpEvents;
};

// Decodes the UserOpProcessed event from logs
const parseUserOpProcessedEvents = (params: {
  logs: EthLog[];
  filterUserOpHashes?: string[];
}): UserOpProcessedEventParams[] => {
  const eventLogs = params.logs.filter(
    (log) => utils.hexlify(log.topics[0]) === userOpProcessedId
  );

  // Log warning if no matching events are found
  if (eventLogs.length === 0) {
    console.warn(`UserOpProcessed not found`);
    return [];
  }

  // Use reduce to accumulate valid events
  const decodedUserOpProcessedEvents = eventLogs.reduce<
    UserOpProcessedEventParams[]
  >((UserOpProcesseds, eventLog) => {
    const userOpHash = utils.hexlify(eventLog.topics[1]);

    // Apply filters if provided
    if (
      params.filterUserOpHashes &&
      !params.filterUserOpHashes.includes(userOpHash)
    ) {
      return UserOpProcesseds;
    }

    const userOpSender = utils.getAddress("0x" + eventLog.topics[2].slice(26));
    const signerDataHash = utils.hexlify(eventLog.topics[3]);

    const [
      mode,
      actualGasCost,
      token,
      actualTokenCost,
      chargeFrom,
      chargeSuccessful,
    ] = utils.defaultAbiCoder.decode(
      ["uint8", "uint256", "address", "uint256", "address", "bool"],
      eventLog.data
    );

    // Push valid event to result
    UserOpProcesseds.push({
      userOpHash,
      userOpSender,
      signerDataHash,
      mode: BigNumber.from(mode).toNumber(),
      actualGasCost: BigNumber.from(actualGasCost),
      token: utils.getAddress(token),
      actualTokenCost: BigNumber.from(actualTokenCost),
      chargeFrom: utils.getAddress(chargeFrom),
      chargeSuccessful,
    });

    return UserOpProcesseds;
  }, []);

  if (decodedUserOpProcessedEvents.length === 0) {
    console.warn(`No matching UserOpProcessed events found`);
  }
  return decodedUserOpProcessedEvents;
};

// Sends notifications to Discord webhook
const notifyDiscord = async (text: string, webhookLink?: string) => {
  if (!webhookLink) {
    console.error(`Discord webhook link not found`);
    return;
  }

  const discordText = `🐥 ${text}`;

  const data = {
    content: `${discordText}`,
  };

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  console.log(`Sending to Discord: ${discordText}`);

  try {
    // Send message to Discord
    const response = await axios.post(webhookLink, data, config);

    // Throw error if response status is not 204
    if (response.status !== 204) {
      throw new Error(
        `Failed to send Discord notification: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(`Error sending Discord notification: ${error}`);
  }
};

// Append a value to a JSON array in sharedState
const pushToSharedState = async (
  key: string,
  value: UserOpProcessedEventParams
) => {
  sharedState[key] = sharedState[key] || [];
  sharedState[key].push(JSON.parse(JSON.stringify(value)));
};

// Entrypoint for the Autotask
export async function handler(actionEvent: ActionEvent) {
  if (
    !actionEvent.request?.body ||
    !("transaction" in actionEvent.request.body) ||
    !("logs" in (actionEvent.request.body as BlockTriggerEvent).transaction)
  ) {
    console.error("Logs are not found in the transaction.");
    return;
  }

  const requestBody = actionEvent.request.body as BlockTriggerEvent;
  printJson("requestBody", requestBody);

  const logs = requestBody.transaction.logs;
  printJson("logs", logs);

  const discordWebhookLink =
    actionEvent?.secrets?.DISCORD_PAYMASTER_CHANNEL_WEBHOOK;
  console.log(`discordWebhookLink: ${discordWebhookLink}`);

  const monitoredPaymasterAddresses: string[] = [];

  try {
    if (actionEvent?.secrets?.MONITORED_PAYMASTER_ADDRESSES) {
      const parsedAddresses = JSON.parse(
        actionEvent.secrets.MONITORED_PAYMASTER_ADDRESSES
      );

      if (Array.isArray(parsedAddresses)) {
        monitoredPaymasterAddresses.push(...parsedAddresses);
      } else {
        console.error("MONITORED_PAYMASTER_ADDRESSES is not a valid array.");
      }
    }
  } catch (error) {
    console.error("Failed to parse MONITORED_PAYMASTER_ADDRESSES:", error);
  }
  printJson("monitoredPaymasterAddresses", monitoredPaymasterAddresses);

  const userOpEventLogs = parseUserOpEvent({
    logs,
    filterPaymasters: monitoredPaymasterAddresses,
  });
  printJson("userOpEventLogs", userOpEventLogs);

  // Extract user operation hashes from event logs
  const userOpHashes = userOpEventLogs.map((userOp) => userOp.userOpHash);

  const userOpProcessedLogs = parseUserOpProcessedEvents({
    logs,
    filterUserOpHashes: userOpHashes,
  });

  if (userOpProcessedLogs.length === 0) {
    return;
  }

  printJson("userOpProcessedLogs", userOpProcessedLogs);

  // Process each user operation processed log
  for (const userOpProcessedLog of userOpProcessedLogs) {
    // Skip if not in ChargeInPostOp mode
    if (userOpProcessedLog.mode !== PaymasterMode.ChargeInPostOp) {
      continue;
    }

    if (userOpProcessedLog.chargeSuccessful) {
      pushToSharedState("ChargeInPostOpSuccess", userOpProcessedLog);
    }

    if (!userOpProcessedLog.chargeSuccessful) {
      pushToSharedState("ChargeInPostOpFail", userOpProcessedLog);
      // Notify Discord with the post-operation revert
      await notifyDiscord(
        jsonStringify(userOpProcessedLog),
        discordWebhookLink
      );
    }
  }

  console.log(`OpenZeppelin Defender Actions script completed.`);
}

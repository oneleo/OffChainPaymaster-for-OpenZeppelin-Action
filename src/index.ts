import {
  ActionEvent,
  BlockTriggerEvent,
  EthLog,
} from "@openzeppelin/defender-sdk-action-client";
import { utils, BigNumber, providers, Contract } from "ethers";

import axios from "axios";

export const sharedState: Record<
  "ChargeInPostOpSuccess" | "ChargeInPostOpFail" | "PostOpRevertReason",
  UserOpProcessedEventParams[] | PostOpRevertReasonEventParams[]
> = {
  ChargeInPostOpSuccess: [],
  ChargeInPostOpFail: [],
  PostOpRevertReason: [],
};

enum ChainId {
  Mainnet = 1,
  OptimismMainnet = 10,
  ArbitrumOne = 42161,
  BaseSepolia = 84532,
  ArbitrumSepolia = 421614,
  Sepolia = 11155111,
  OptimismSepolia = 11155420,
}

// Identifier for UserOperationEvent event
// = keccak256(abi.encodePacked("UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)"))
const userOperationEventId = utils.hexlify(
  "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f"
);

// Identifier for PostOpRevertReason event
// = keccak256(abi.encodePacked("PostOpRevertReason(bytes32,address,uint256,bytes)"))
const postOpRevertReasonId = utils.hexlify(
  "0xf62676f440ff169a3a9afdbf812e89e7f95975ee8e5c31214ffdef631c5f4792"
);

// Identifier for UserOpProcessed event
// = keccak256(abi.encodePacked("UserOpProcessed(bytes32,address,bytes32,uint8,uint256,address,uint256,address,bool)"))
const userOpProcessedId = utils.hexlify(
  "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9"
);

// Identifier for CanNotChargeFrom error
// = keccak256(abi.encodePacked("CanNotChargeFrom()"))
const canNotChargeFromId = utils.hexlify(
  "0x58e450b14e49a4d03ffcd259c7ba1dfa2ce932e62dfac7782ca5d6cc50c1be10"
);

const canNotChargeFromSelector = utils.hexDataSlice(canNotChargeFromId, 0, 4);

const entryPointInterface = new utils.Interface([
  "error PostOpReverted(bytes returnData)",
]);

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
  nonce: BigNumber; // uint256
  success: boolean; // bool
  actualGasCost: BigNumber; // uint256
  actualGasUsed: BigNumber; // uint256
}

// Structure for PostOpRevertReason event
export interface PostOpRevertReasonEventParams {
  userOpHash: string; // bytes32
  sender: string; // address
  nonce: bigint; // uint256
  revertReason: PostOpReverted; // bytes
}

export type PostOpReverted =
  | {
      error: string;
    }
  | {
      error: "CanNotChargeFrom";
    };

// Structure for UserOpProcessed event
export interface UserOpProcessedEventParams {
  userOpHash: string; // bytes32
  userOpSender: string; // address
  signerDataHash: string; // bytes32
  mode: PaymasterMode; // uint8
  actualGasCost: BigNumber; // uint256
  token: string; // address
  actualTokenCost: BigNumber; // uint256
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

// Decodes the PostOpRevertReason event from logs
const parsePostOpRevertReasonEvents = (params: {
  logs: EthLog[];
  filterUserOpHashes?: string[];
}): PostOpRevertReasonEventParams[] => {
  const eventLogs = params.logs.filter(
    (log) => log.topics[0] === postOpRevertReasonId
  );

  // Log warning if event not found
  if (eventLogs.length === 0) {
    console.warn(`PostOpRevertReason event not found`);
    return [];
  }

  const decodedPostOpRevertReasonEvents = eventLogs.reduce<
    PostOpRevertReasonEventParams[]
  >((postOpRevertReasons, eventLog) => {
    // Extract userOpHash from indexed topic
    const userOpHash = eventLog.topics[1];

    // Skip if the userOpHash doesn't match the filter (if provided)
    if (
      params.filterUserOpHashes &&
      !params.filterUserOpHashes.includes(userOpHash)
    ) {
      return postOpRevertReasons;
    }

    // Extract sender address from indexed topic
    const sender = utils.getAddress(utils.hexDataSlice(eventLog.topics[2], 12));

    // Extract nonce and revertReason from data
    const [nonce, revertReason] = utils.defaultAbiCoder.decode(
      ["uint256", "bytes"],
      eventLog.data
    );

    const [returnData] = entryPointInterface.decodeErrorResult(
      "PostOpReverted",
      revertReason
    );

    let postOpReverted: PostOpReverted;

    switch (utils.hexlify(returnData)) {
      case canNotChargeFromSelector: {
        postOpReverted = { error: "CanNotChargeFrom" };
        break;
      }
      default: {
        postOpReverted = { error: utils.hexlify(returnData) };
        break;
      }
    }

    postOpRevertReasons.push({
      userOpHash,
      sender,
      nonce,
      revertReason: postOpReverted,
    });

    return postOpRevertReasons;
  }, []);

  if (decodedPostOpRevertReasonEvents.length === 0) {
    console.warn(`No PostOpRevertReason events matched the provided filter`);
  }

  return decodedPostOpRevertReasonEvents;
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

// Gets network name based on chain ID
const getAlarmDepositAmount = (chainId: number): bigint => {
  const alarmDepositAmount: Record<number, number> = {
    [ChainId.Mainnet]: 0.0002,
    [ChainId.OptimismMainnet]: 0.02, // 0.02
    [ChainId.ArbitrumOne]: 0.2, // 0.2
    [ChainId.BaseSepolia]: 0.02,
    [ChainId.ArbitrumSepolia]: 0.2,
    [ChainId.Sepolia]: 0.0002,
    [ChainId.OptimismSepolia]: 0.02,
  };

  return BigInt((alarmDepositAmount[chainId] ?? 0.0002) * 10 ** 18);
};

// Formats the token balance with decimal precision
const formatTokenBalance = (balance: bigint, decimals: number): string => {
  const integerPart = balance / 10n ** BigInt(decimals);
  const decimalPart = balance % 10n ** BigInt(decimals);

  const formattedBalance = `${integerPart}.${decimalPart
    .toString()
    .padStart(Number(decimals), "0")}`;

  return formattedBalance;
};

// Gets network name based on chain ID
const getNetworkName = (chainId: number): string => {
  const baseNames: Record<number, string> = {
    [ChainId.Mainnet]: `Mainnet`,
    [ChainId.OptimismMainnet]: `Optimism`,
    [ChainId.ArbitrumOne]: `Arbitrum One`,
    [ChainId.BaseSepolia]: `Base Sepolia Testnet`,
    [ChainId.ArbitrumSepolia]: `Arbitrum Sepolia Testnet`,
    [ChainId.Sepolia]: `Sepolia Testnet`,
    [ChainId.OptimismSepolia]: `Optimism Sepolia Testnet`,
  };

  return baseNames[chainId] ?? `Unknown network`;
};

// Gets writeContract scan URL for a given chain ID and address
const getAddressScanUrl = (chainId: number, address: string): string => {
  const baseUrls: Record<number, string> = {
    [ChainId.Mainnet]: `https://etherscan.io/address/`,
    [ChainId.OptimismMainnet]: `https://optimistic.etherscan.io/address/`,
    [ChainId.ArbitrumOne]: `https://arbiscan.io/address/`,
    [ChainId.BaseSepolia]: `https://sepolia.basescan.org/address/`,
    [ChainId.ArbitrumSepolia]: `https://sepolia.arbiscan.io/address/`,
    [ChainId.Sepolia]: `https://sepolia.etherscan.io/address/`,
    [ChainId.OptimismSepolia]: `https://sepolia-optimism.etherscan.io/address/`,
  };

  return baseUrls[chainId]
    ? `${baseUrls[chainId]}${address}#writeContract`
    : `Unknown`;
};

// Gets transaction scan URL for a given chain ID and address
const getTransactionScanUrl = (
  chainId: number,
  transactionHash: string
): string => {
  const baseUrls: Record<number, string> = {
    [ChainId.Mainnet]: `https://etherscan.io/tx/`,
    [ChainId.OptimismMainnet]: `https://optimistic.etherscan.io/tx/`,
    [ChainId.ArbitrumOne]: `https://arbiscan.io/tx/`,
    [ChainId.BaseSepolia]: `https://sepolia.basescan.org/tx/`,
    [ChainId.ArbitrumSepolia]: `https://sepolia.arbiscan.io/tx/`,
    [ChainId.Sepolia]: `https://sepolia.etherscan.io/tx/`,
    [ChainId.OptimismSepolia]: `https://sepolia-optimism.etherscan.io/tx/`,
  };

  return baseUrls[chainId]
    ? `${baseUrls[chainId]}${transactionHash}#eventlog`
    : `Unknown`;
};

// Gets RPC URL based on chain ID and API key
const getRpcUrl = (chainId: number, alchemyApiKey: string): string | null => {
  const baseUrls: Record<number, string> = {
    [ChainId.Mainnet]: `https://eth-mainnet.g.alchemy.com/v2/`,
    [ChainId.OptimismMainnet]: `https://opt-mainnet.g.alchemy.com/v2/`,
    [ChainId.ArbitrumOne]: `https://arb-mainnet.g.alchemy.com/v2/`,
    [ChainId.BaseSepolia]: `https://base-sepolia.g.alchemy.com/v2/`,
    [ChainId.ArbitrumSepolia]: `https://arb-sepolia.g.alchemy.com/v2/`,
    [ChainId.Sepolia]: `https://eth-sepolia.g.alchemy.com/v2/`,
    [ChainId.OptimismSepolia]: `https://opt-sepolia.g.alchemy.com/v2/`,
  };

  return baseUrls[chainId] ? `${baseUrls[chainId]}${alchemyApiKey}` : null;
};

// Gets token balance and decimals using the Alchemy API
const getDeposit = async (
  chainId: number,
  paymasterAddress: string,
  alchemyApiKey?: string
): Promise<BigNumber | null> => {
  if (!alchemyApiKey) {
    console.error(`Alchemy api key not found`);
    return null;
  }

  const rpcUrl = getRpcUrl(chainId, alchemyApiKey);

  if (!rpcUrl) {
    console.error(`Can not get deposit: chainId not found`);
    return null;
  }

  const provider = new providers.JsonRpcProvider(rpcUrl);

  const basePaymasterContract = new Contract(
    paymasterAddress,
    ["function getDeposit() public view returns (uint256)"],
    provider
  );

  try {
    const balance = BigNumber.from(await basePaymasterContract.getDeposit());

    return balance;
  } catch (error) {
    console.error(`Failed to get deposit: ${error}`);
    return null;
  }
};

// Sends notifications to Discord webhook
const notifyDiscord = async (
  title: string,
  text: string,
  webhookLink?: string
) => {
  if (!webhookLink) {
    console.error(`Discord webhook link not found`);
    return;
  }

  const discordText = `${title}\n${text}`;

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

// Sends notifications to Slack webhook
const notifySlack = async (
  title: string,
  text: string,
  webhookLink?: string
) => {
  if (!webhookLink) {
    console.error(`Slack webhook link not found`);
    return;
  }

  const payload = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${title}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${text}`,
        },
      },
    ],
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  console.log(`Sending to Slack: ${title}\n${text}`);

  try {
    // Send message to Slack
    const response = await axios.post(webhookLink, payload, config);
    console.log(`response.status: ${response.status}`);

    // Throw error if response status is not 204
    if (response.status !== 200) {
      throw new Error(
        `Failed to send Slack notification: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(`Error sending Slack notification: ${error}`);
  }
};

// Append a value to a JSON array in sharedState
const pushToSharedState = async (
  params:
    | {
        key: "ChargeInPostOpSuccess" | "ChargeInPostOpFail";
        value: UserOpProcessedEventParams;
      }
    | { key: "PostOpRevertReason"; value: PostOpRevertReasonEventParams }
) => {
  sharedState[params.key] = sharedState[params.key] || [];
  sharedState[params.key].push(JSON.parse(JSON.stringify(params.value)));
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
  printJson("actionEvent", actionEvent);

  const requestBody = actionEvent.request.body as BlockTriggerEvent;
  //   printJson("requestBody", requestBody);

  const logs = requestBody.transaction.logs;
  //   printJson("logs", logs);

  const discordWebhookLink =
    actionEvent?.secrets?.DISCORD_PAYMASTER_CHANNEL_WEBHOOK;
  console.log(`discordWebhookLink: ${discordWebhookLink}`);

  const slackWebhookLink =
    actionEvent?.secrets?.SLACK_PAYMASTER_CHANNEL_WEBHOOK;
  console.log(`slackWebhookLink: ${slackWebhookLink}`);

  const alchemyApiKey = actionEvent?.secrets?.ALCHEMY_API_KEY;
  console.log(`alchemyApiKey: ${alchemyApiKey}`);

  const blockTriggerEvent: BlockTriggerEvent = actionEvent.request
    .body as BlockTriggerEvent;

  const chainId = blockTriggerEvent.monitor.chainId;
  const networkName = getNetworkName(chainId);
  const transactionHash = requestBody.hash;
  const transactionOnScan = getTransactionScanUrl(chainId, transactionHash);

  console.log(`chainId: ${chainId}`);

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
        return;
      }
    }
  } catch (error) {
    console.error("Failed to parse MONITORED_PAYMASTER_ADDRESSES:", error);
    return;
  }
  printJson("monitoredPaymasterAddresses", monitoredPaymasterAddresses);

  const userOpEventLogs = parseUserOpEvent({
    logs,
    filterPaymasters: monitoredPaymasterAddresses,
  });
  printJson("userOpEventLogs", userOpEventLogs);

  // Extract user operation hashes and paymasters from event logs
  const userOpHashes: string[] = [];
  const paymasters: Record<string, string> = {};

  userOpEventLogs.forEach((userOp) => {
    userOpHashes.push(userOp.userOpHash);
    paymasters[userOp.userOpHash] = userOp.paymaster;
  });

  const userOpProcessedLogs = parseUserOpProcessedEvents({
    logs,
    filterUserOpHashes: userOpHashes,
  });

  printJson("userOpProcessedLogs", userOpProcessedLogs);

  // Process each user operation processed log
  for (const userOpProcessedLog of userOpProcessedLogs) {
    // Skip if not in ChargeInPostOp mode
    if (userOpProcessedLog.mode !== PaymasterMode.ChargeInPostOp) {
      continue;
    }

    const userOpHash = userOpProcessedLog.userOpHash;
    const paymasterAddress = paymasters[userOpHash];
    const paymasterOnScan = getAddressScanUrl(chainId, paymasterAddress);

    const depositAmount = await getDeposit(
      chainId,
      paymasterAddress,
      alchemyApiKey
    );
    if (depositAmount === null) {
      const title = `*_(OpenZeppelin) Error with Alchemy RPC URL 🌐_*`;

      const text = `*[Description]*\n\tUnable to retrieve OffChainPaymaster's deposits value on the ${networkName}.\n*[Impact]*\n\tUnable to assess if deposits fall below the threshold, creating potential risks.\n*[Action Needed]*\n\t1. Check if the Alchemy RPC service is down.\n\t2. Verify API key usage limit.\n\t3. Check on-chain transaction for deposit threshold breach.\n*[Details]*\n\t1. OffChainPaymaster address: <${paymasterOnScan}|${paymasterAddress}>.\n\t2. Deployment documents: <https://imtoken.atlassian.net/wiki/spaces/UED/pages/1634828293/Tenderly+Web3+Actions+OffChainPaymaster#5、設置-Alchemy-API-Key-至-SECRET|Tenderly>, <https://imtoken.atlassian.net/wiki/spaces/UED/pages/1653407817/OpenZeppelin+Defender+Actions+OffChainPaymaster#3%E3%80%81%E8%A8%AD%E7%BD%AE-Discord%EF%BC%8FSlack-webhook-URL%EF%BC%8FAlchemy-API-Key%E3%80%81Paymasters-addresses-%E8%87%B3-SECRET|OpenZeppelin>.\n*[Contact]*\n\t1. Irara: <@U03HEAQL36X>\n\t2. Jiahui: <@U03TKT79H7V>\n\t3. Nic: <@U01DV7XCYA3>\n*[Triggered by]*\n\tTransaction: <${transactionOnScan}|${transactionHash}>.`;

      console.error(`title & text: ${title}\n${text}`);

      // Notify Discord
      await notifyDiscord(title, text, discordWebhookLink);

      // Notify Slack
      await notifySlack(title, text, slackWebhookLink);
    }

    const alarmDepositAmount = getAlarmDepositAmount(chainId);

    console.log(`paymasterOnScan: ${paymasterOnScan}`);
    console.log(`depositAmount:\t${depositAmount?.toBigInt()}`);
    console.log(`alarmAmount:\t${alarmDepositAmount}`);

    if (depositAmount && depositAmount.toBigInt() <= alarmDepositAmount) {
      const formatDepositAmount = formatTokenBalance(
        depositAmount.toBigInt(),
        18
      );
      const formatAlarmDepositAmount = formatTokenBalance(
        alarmDepositAmount,
        18
      );

      const title = `*_(OpenZeppelin) OffChainPaymaster Low ETH Deposits Alert 🚨_*`;

      const text = `*[Description]*\n\tThe OffChainPaymaster deposits is now ${formatDepositAmount} ETH, below the ${formatAlarmDepositAmount} ETH safe threshold on the ${networkName}.\n*[Impact]*\n\tPayments for new transactions might fail.\n*[Action Needed]*\n\tAdd at least ${formatAlarmDepositAmount} ETH to the Paymaster address.\n*[Details]*\n\t1. OffChainPaymaster address: <${paymasterOnScan}|${paymasterAddress}>.\n\t2. Documents: <https://imtoken.atlassian.net/wiki/spaces/UED/pages/1661435953/imToken+Paymaster#Paymaster-%E5%90%88%E7%BA%A6|Paymaster contract>\n*[Contact]*\n\t1. Jiahui: <@U03TKT79H7V>\n\t2. Nic: <@U01DV7XCYA3>\n\t3. Irara: <@U03HEAQL36X>\n*[Triggered by]*\n\tTransaction: <${transactionOnScan}|${transactionHash}>.`;

      console.warn(`title & text: ${title}\n${text}`);

      // Notify Discord
      await notifyDiscord(title, text, discordWebhookLink);

      // Notify Slack
      await notifySlack(title, text, slackWebhookLink);
    }

    if (userOpProcessedLog.chargeSuccessful) {
      pushToSharedState({
        key: "ChargeInPostOpSuccess",
        value: userOpProcessedLog,
      });
    }

    if (!userOpProcessedLog.chargeSuccessful) {
      pushToSharedState({
        key: "ChargeInPostOpFail",
        value: userOpProcessedLog,
      });

      const senderAddress = userOpProcessedLog.userOpSender;
      const senderOnScan = getAddressScanUrl(chainId, senderAddress);

      const title = `*_(OpenZeppelin) OffChainPaymaster failed to collect token fees 🚷_*`;

      const text = `*[Description]*\n\tOffChainPaymaster failed to collect token fees from the <${senderOnScan}|sender> in ChargeInPostOp mode on the ${networkName}.\n*[Impact]*\n\tPossible attack preventing fee collection.\n*[Action Needed]*\n\t1. Check transaction parameters.\n\t2. Confirm if sender is attempting suspicious activity.\n*[Details]*\n\t1. OffChainPaymaster address: <${paymasterOnScan}|${paymasterAddress}>.\n\t2. Monitoring documents: <https://imtoken.atlassian.net/wiki/spaces/UED/pages/1635057761/imToken+Paymaster#%E7%9B%A3%E6%8E%A7%E6%96%B9%E5%BC%8F|OffChainPaymaster monitoring>.\n*[Contact]*\n\t1. Nic: <@U01DV7XCYA3>\n\t2. Jiahui: <@U03TKT79H7V>\n\t3. Irara: <@U03HEAQL36X>\n*[Triggered by]*\n\t1. Transaction: <${transactionOnScan}|${transactionHash}>.\n\t2. UserOperation: <https://v2.jiffyscan.xyz/userOpHash/${userOpHash}|${userOpHash}>`;

      // Notify Discord with the post-operation revert
      await notifyDiscord(title, text, discordWebhookLink);

      // Notify Slack with the post-operation revert
      await notifySlack(title, text, slackWebhookLink);
    }
  }

  const postOpRevertReasonLogs = parsePostOpRevertReasonEvents({
    logs,
    filterUserOpHashes: userOpHashes,
  });

  printJson("postOpRevertReasonLogs", postOpRevertReasonLogs);

  // Process each user operation processed log
  for (const postOpRevertReasonLog of postOpRevertReasonLogs) {
    await pushToSharedState({
      key: "PostOpRevertReason",
      value: postOpRevertReasonLog,
    });

    const senderAddress = postOpRevertReasonLog.sender;
    const senderOnScan = getAddressScanUrl(chainId, senderAddress);

    const userOpHash = postOpRevertReasonLog.userOpHash;
    const paymasterAddress = paymasters[userOpHash];
    const paymasterOnScan = getAddressScanUrl(chainId, paymasterAddress);

    const title = `*_(OpenZeppelin) Paymaster's postOp() call reverted 🔔_*`;

    const text = `*[Description]*\n\tThe UserOperation Paymaster's postOp() call reverted from the <${senderOnScan}|sender> on the ${networkName}.\n*[Impact]*\n\t1. Possible attack preventing fee collection.\n\t2. OffChainPaymaster deposits might be insufficient.\n*[Action Needed]*\n\t1. Check transaction parameters.\n\t2. Confirm if sender is attempting suspicious activity.\n\t3. Check if the OffChainPaymaster's deposits are sufficient.\n*[Details]*\n\t1. OffChainPaymaster address: <${paymasterOnScan}|${paymasterAddress}>.\n\t2. Monitoring documents: <https://imtoken.atlassian.net/wiki/spaces/UED/pages/1635057761/imToken+Paymaster#%E7%9B%A3%E6%8E%A7%E6%96%B9%E5%BC%8F|OffChainPaymaster monitoring>.\n*[Contact]*\n\t1. Nic: <@U01DV7XCYA3>\n\t2. Jiahui: <@U03TKT79H7V>\n\t3. Irara: <@U03HEAQL36X>\n*[Triggered by]*\n\t1. Transaction: <${transactionOnScan}|${transactionHash}>.\n\t2. UserOperation: <https://v2.jiffyscan.xyz/userOpHash/${userOpHash}|${userOpHash}>`;

    // Notify Discord with the post-operation revert
    await notifyDiscord(title, text, discordWebhookLink);

    // Notify Slack with the post-operation revert
    await notifySlack(title, text, slackWebhookLink);
  }

  console.log(`OpenZeppelin Defender Actions script completed.`);
}

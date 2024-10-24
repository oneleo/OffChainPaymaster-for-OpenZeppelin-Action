import {
  ActionEvent,
  PreviousActionRunInfo,
  ActionRequestData,
  ActionSecretsMap,
} from "@openzeppelin/defender-sdk-action-client";

// Refer: https://jiffyscan.xyz/bundle/0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8
export const handleOpsActionEvent: ActionEvent = {
  // "autotaskId": "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
  // "autotaskName": "Emit OffChainPaymaster UserOpProcessed()",
  // "autotaskRunId": "901d49b9-e8e8-4c70-9125-cb4217b54745",
  kvstoreARN:
    "arn:aws:lambda:us-west-2:665768922667:function:defender-prod-proxy-kvstore:f7e72970-78da-4606-bf2c-841684eeee96_STORE",
  previousRun: {
    trigger: "monitor", // "sentinel",
    status: "success",
    createdAt: "2024-10-24T07:50:27.140Z",
    //   "autotaskId": "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
    actionId: "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
    //   "result": "null",
    //   "statusCreatedAt": "success|2024-10-24T07:50:27.140Z",
    //   "autotaskRunId": "6041389e-fcba-4616-9c17-612fee65abef"
    actionRunId: "6041389e-fcba-4616-9c17-612fee65abef",
  } as PreviousActionRunInfo,
  // "tenantId": "f7e72970-78da-4606-bf2c-841684eeee96",
  // "trigger": "sentinel",
  actionId: "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
  actionName: "Emit OffChainPaymaster UserOpProcessed()",
  actionRunId: "901d49b9-e8e8-4c70-9125-cb4217b54745",
  secrets: {
    MONITORED_PAYMASTER_ADDRESSES:
      '["0x44D6f8362c144A1217f24A11bE35f2c418B6cb20","0xBDd6EB5C9A89f21B559f65C6b2bbeC265cE54C82","0x4779C973b060c9cc1592b404cAd9CB5AFB0d4B52"]',
    DISCORD_PAYMASTER_CHANNEL_WEBHOOK: "",
    SLACK_PAYMASTER_CHANNEL_WEBHOOK: "",
  } as ActionSecretsMap,
  request: {
    body: {
      hash: "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
      transaction: {
        blockHash:
          "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
        blockNumber: "0x1034fe8",
        contractAddress: null,
        cumulativeGasUsed: "0x24cf7a",
        effectiveGasPrice: "0x1966c24e",
        from: "0xe97b63899e72efbe9ab3f08967dee4edf1eb4270",
        gasUsed: "0x2b147",
        l1BaseFeeScalar: "0x44d",
        l1BlobBaseFee: "0x1",
        l1BlobBaseFeeScalar: "0xa118b",
        l1Fee: "0x25797cce2",
        l1GasPrice: "0x5df39ee9",
        l1GasUsed: "0x16a4",
        logs: [
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x",
            logIndex: "0x11",
            removed: false,
            topics: [
              "0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
          {
            address: "0xbdd6eb5c9a89f21b559f65c6b2bbec265ce54c82",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000067b60000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
            logIndex: "0x12",
            removed: false,
            topics: [
              "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9",
              "0xe6a5a1709053a65d80707998a4bd9f1e765ca0490d41be83a70b81905a4681f7",
              "0x000000000000000000000000934aa3a6997c3fa870c1a3d8e76bc49bf24c01de",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000003915b000000000000000000000000000000000000000000000000000000000003915b",
            logIndex: "0x13",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0xe6a5a1709053a65d80707998a4bd9f1e765ca0490d41be83a70b81905a4681f7",
              "0x000000000000000000000000934aa3a6997c3fa870c1a3d8e76bc49bf24c01de",
              "0x000000000000000000000000bdd6eb5c9a89f21b559f65c6b2bbec265ce54c82",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
          {
            address: "0x44d6f8362c144a1217f24a11be35f2c418b6cb20",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000067a60000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
            logIndex: "0x14",
            removed: false,
            topics: [
              "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9",
              "0x36c3bff2344cfeee3552db71acf1a6828c0d0a280a50f57eec43519bfeed5a5f",
              "0x0000000000000000000000007047642db93f086235274fb95d212bdebaf4fefc",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000391d100000000000000000000000000000000000000000000000000000000000391d1",
            logIndex: "0x15",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0x36c3bff2344cfeee3552db71acf1a6828c0d0a280a50f57eec43519bfeed5a5f",
              "0x0000000000000000000000007047642db93f086235274fb95d212bdebaf4fefc",
              "0x00000000000000000000000044d6f8362c144a1217f24a11be35f2c418b6cb20",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000064ad7954bc0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000458e450b10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            logIndex: "0x16",
            removed: false,
            topics: [
              "0xf62676f440ff169a3a9afdbf812e89e7f95975ee8e5c31214ffdef631c5f4792",
              "0x1c7bd9fc9dcede7117bcb81697dc846b52c6d39c3ae677b229857caf3f340afb",
              "0x000000000000000000000000b0b87ddef364862f5533369963203e7d00ba64bb",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
            blockNumber: "0x1034fe8",
            data: "0x00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003ac36000000000000000000000000000000000000000000000000000000000003ac36",
            logIndex: "0x17",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0x1c7bd9fc9dcede7117bcb81697dc846b52c6d39c3ae677b229857caf3f340afb",
              "0x000000000000000000000000b0b87ddef364862f5533369963203e7d00ba64bb",
              "0x0000000000000000000000004779c973b060c9cc1592b404cad9cb5afb0d4b52",
            ],
            transactionHash:
              "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
            transactionIndex: "0xd",
          },
        ],
        logsBloom:
          "0x00000000000000200000000000000000000004000080000000000000200000000008008000000000000400090000000000080000000000000001020000040000000000000000000000000000000000000040000020050000000000000000000000002000200800040000000000000000000040000000080000800000010000004000040000000800000000000000000000000000000400000200400000000000000000000000400000400000000000040000000000000010100002000000000000000000000000440001000000000000000000000c00000000000800000140000000000000000000040000000000000000100000200800000000000100000000",
        status: "0x1",
        to: "0x0000000071727de22e5e9d8baf0edac6f37da032",
        transactionHash:
          "0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8",
        transactionIndex: "0xd",
        type: "0x2",
      },
      blockHash:
        "0x5b3cb7d7db9a4d54f8939c16633cab41a907a6e88ade079f6650dff140f44b3a",
      blockNumber: "0x1034fe8",
      timestamp: 1729756848,
      matchReasons: [
        {
          type: "event",
          signature: "PostOpRevertReason(bytes32,address,uint256,bytes)",
          address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
          args: [
            "0x1c7bd9fc9dcede7117bcb81697dc846b52c6d39c3ae677b229857caf3f340afb",
            "0xb0b87dDeF364862f5533369963203e7d00ba64bB",
            "4",
            "0xad7954bc0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000458e450b100000000000000000000000000000000000000000000000000000000",
          ],
          params: {
            userOpHash:
              "0x1c7bd9fc9dcede7117bcb81697dc846b52c6d39c3ae677b229857caf3f340afb",
            sender: "0xb0b87dDeF364862f5533369963203e7d00ba64bB",
            nonce: "4",
            revertReason:
              "0xad7954bc0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000458e450b100000000000000000000000000000000000000000000000000000000",
          },
        },
      ],
      matchedAddresses: ["0x0000000071727de22e5e9d8baf0edac6f37da032"],
      matchedChecksumAddresses: ["0x0000000071727De22E5E9d8BAf0edAc6f37da032"],
      sentinel: {
        id: "90b9f9be-f543-4b89-8880-5478f4326fd1",
        name: "Emit EntryPoint UserOpRevertReason()",
        abi: [
          {
            type: "event",
            anonymous: false,
            name: "AccountDeployed",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "address",
                name: "factory",
                indexed: false,
              },
              {
                type: "address",
                name: "paymaster",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "BeforeExecution",
            inputs: [],
          },
          {
            type: "event",
            anonymous: false,
            name: "Deposited",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "uint256",
                name: "totalDeposit",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "PostOpRevertReason",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
              {
                type: "bytes",
                name: "revertReason",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "SignatureAggregatorChanged",
            inputs: [
              {
                type: "address",
                name: "aggregator",
                indexed: true,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "StakeLocked",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "uint256",
                name: "totalStaked",
                indexed: false,
              },
              {
                type: "uint256",
                name: "unstakeDelaySec",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "StakeUnlocked",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "uint256",
                name: "withdrawTime",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "StakeWithdrawn",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "address",
                name: "withdrawAddress",
                indexed: false,
              },
              {
                type: "uint256",
                name: "amount",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOperationEvent",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "address",
                name: "paymaster",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
              {
                type: "bool",
                name: "success",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasCost",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasUsed",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOperationPrefundTooLow",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOperationRevertReason",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
              {
                type: "bytes",
                name: "revertReason",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "Withdrawn",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "address",
                name: "withdrawAddress",
                indexed: false,
              },
              {
                type: "uint256",
                name: "amount",
                indexed: false,
              },
            ],
          },
          {
            type: "function",
            name: "addStake",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [
              {
                type: "uint32",
                name: "unstakeDelaySec",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "balanceOf",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "account",
              },
            ],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "delegateAndRevert",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "target",
              },
              {
                type: "bytes",
                name: "data",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "depositTo",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [
              {
                type: "address",
                name: "account",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "deposits",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
              },
            ],
            outputs: [
              {
                type: "uint256",
                name: "deposit",
              },
              {
                type: "bool",
                name: "staked",
              },
              {
                type: "uint112",
                name: "stake",
              },
              {
                type: "uint32",
                name: "unstakeDelaySec",
              },
              {
                type: "uint48",
                name: "withdrawTime",
              },
            ],
          },
          {
            type: "function",
            name: "getDepositInfo",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "account",
              },
            ],
            outputs: [
              {
                type: "tuple",
                name: "info",
                components: [
                  {
                    type: "uint256",
                    name: "deposit",
                  },
                  {
                    type: "bool",
                    name: "staked",
                  },
                  {
                    type: "uint112",
                    name: "stake",
                  },
                  {
                    type: "uint32",
                    name: "unstakeDelaySec",
                  },
                  {
                    type: "uint48",
                    name: "withdrawTime",
                  },
                ],
              },
            ],
          },
          {
            type: "function",
            name: "getNonce",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "sender",
              },
              {
                type: "uint192",
                name: "key",
              },
            ],
            outputs: [
              {
                type: "uint256",
                name: "nonce",
              },
            ],
          },
          {
            type: "function",
            name: "getSenderAddress",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "bytes",
                name: "initCode",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "getUserOpHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "tuple",
                name: "userOp",
                components: [
                  {
                    type: "address",
                    name: "sender",
                  },
                  {
                    type: "uint256",
                    name: "nonce",
                  },
                  {
                    type: "bytes",
                    name: "initCode",
                  },
                  {
                    type: "bytes",
                    name: "callData",
                  },
                  {
                    type: "bytes32",
                    name: "accountGasLimits",
                  },
                  {
                    type: "uint256",
                    name: "preVerificationGas",
                  },
                  {
                    type: "bytes32",
                    name: "gasFees",
                  },
                  {
                    type: "bytes",
                    name: "paymasterAndData",
                  },
                  {
                    type: "bytes",
                    name: "signature",
                  },
                ],
              },
            ],
            outputs: [
              {
                type: "bytes32",
              },
            ],
          },
          {
            type: "function",
            name: "handleAggregatedOps",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "tuple[]",
                name: "opsPerAggregator",
                components: [
                  {
                    type: "tuple[]",
                    name: "userOps",
                    components: [
                      {
                        type: "address",
                        name: "sender",
                      },
                      {
                        type: "uint256",
                        name: "nonce",
                      },
                      {
                        type: "bytes",
                        name: "initCode",
                      },
                      {
                        type: "bytes",
                        name: "callData",
                      },
                      {
                        type: "bytes32",
                        name: "accountGasLimits",
                      },
                      {
                        type: "uint256",
                        name: "preVerificationGas",
                      },
                      {
                        type: "bytes32",
                        name: "gasFees",
                      },
                      {
                        type: "bytes",
                        name: "paymasterAndData",
                      },
                      {
                        type: "bytes",
                        name: "signature",
                      },
                    ],
                  },
                  {
                    type: "address",
                    name: "aggregator",
                  },
                  {
                    type: "bytes",
                    name: "signature",
                  },
                ],
              },
              {
                type: "address",
                name: "beneficiary",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "handleOps",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "tuple[]",
                name: "ops",
                components: [
                  {
                    type: "address",
                    name: "sender",
                  },
                  {
                    type: "uint256",
                    name: "nonce",
                  },
                  {
                    type: "bytes",
                    name: "initCode",
                  },
                  {
                    type: "bytes",
                    name: "callData",
                  },
                  {
                    type: "bytes32",
                    name: "accountGasLimits",
                  },
                  {
                    type: "uint256",
                    name: "preVerificationGas",
                  },
                  {
                    type: "bytes32",
                    name: "gasFees",
                  },
                  {
                    type: "bytes",
                    name: "paymasterAndData",
                  },
                  {
                    type: "bytes",
                    name: "signature",
                  },
                ],
              },
              {
                type: "address",
                name: "beneficiary",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "incrementNonce",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "uint192",
                name: "key",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "innerHandleOp",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "bytes",
                name: "callData",
              },
              {
                type: "tuple",
                name: "opInfo",
                components: [
                  {
                    type: "tuple",
                    name: "mUserOp",
                    components: [
                      {
                        type: "address",
                        name: "sender",
                      },
                      {
                        type: "uint256",
                        name: "nonce",
                      },
                      {
                        type: "uint256",
                        name: "verificationGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "callGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "paymasterVerificationGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "paymasterPostOpGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "preVerificationGas",
                      },
                      {
                        type: "address",
                        name: "paymaster",
                      },
                      {
                        type: "uint256",
                        name: "maxFeePerGas",
                      },
                      {
                        type: "uint256",
                        name: "maxPriorityFeePerGas",
                      },
                    ],
                  },
                  {
                    type: "bytes32",
                    name: "userOpHash",
                  },
                  {
                    type: "uint256",
                    name: "prefund",
                  },
                  {
                    type: "uint256",
                    name: "contextOffset",
                  },
                  {
                    type: "uint256",
                    name: "preOpGas",
                  },
                ],
              },
              {
                type: "bytes",
                name: "context",
              },
            ],
            outputs: [
              {
                type: "uint256",
                name: "actualGasCost",
              },
            ],
          },
          {
            type: "function",
            name: "nonceSequenceNumber",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
              },
              {
                type: "uint192",
              },
            ],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "supportsInterface",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "bytes4",
                name: "interfaceId",
              },
            ],
            outputs: [
              {
                type: "bool",
              },
            ],
          },
          {
            type: "function",
            name: "unlockStake",
            constant: false,
            payable: false,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "withdrawStake",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "withdrawAddress",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "withdrawTo",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "withdrawAddress",
              },
              {
                type: "uint256",
                name: "withdrawAmount",
              },
            ],
            outputs: [],
          },
        ],
        addresses: ["0x0000000071727De22E5E9d8BAf0edAc6f37da032"],
        confirmBlocks: 1,
        network: "base-sepolia",
        chainId: 84532,
      },
      monitor: {
        id: "90b9f9be-f543-4b89-8880-5478f4326fd1",
        name: "Emit EntryPoint UserOpRevertReason()",
        abi: [
          {
            type: "event",
            anonymous: false,
            name: "AccountDeployed",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "address",
                name: "factory",
                indexed: false,
              },
              {
                type: "address",
                name: "paymaster",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "BeforeExecution",
            inputs: [],
          },
          {
            type: "event",
            anonymous: false,
            name: "Deposited",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "uint256",
                name: "totalDeposit",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "PostOpRevertReason",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
              {
                type: "bytes",
                name: "revertReason",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "SignatureAggregatorChanged",
            inputs: [
              {
                type: "address",
                name: "aggregator",
                indexed: true,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "StakeLocked",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "uint256",
                name: "totalStaked",
                indexed: false,
              },
              {
                type: "uint256",
                name: "unstakeDelaySec",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "StakeUnlocked",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "uint256",
                name: "withdrawTime",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "StakeWithdrawn",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "address",
                name: "withdrawAddress",
                indexed: false,
              },
              {
                type: "uint256",
                name: "amount",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOperationEvent",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "address",
                name: "paymaster",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
              {
                type: "bool",
                name: "success",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasCost",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasUsed",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOperationPrefundTooLow",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOperationRevertReason",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "sender",
                indexed: true,
              },
              {
                type: "uint256",
                name: "nonce",
                indexed: false,
              },
              {
                type: "bytes",
                name: "revertReason",
                indexed: false,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "Withdrawn",
            inputs: [
              {
                type: "address",
                name: "account",
                indexed: true,
              },
              {
                type: "address",
                name: "withdrawAddress",
                indexed: false,
              },
              {
                type: "uint256",
                name: "amount",
                indexed: false,
              },
            ],
          },
          {
            type: "function",
            name: "addStake",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [
              {
                type: "uint32",
                name: "unstakeDelaySec",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "balanceOf",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "account",
              },
            ],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "delegateAndRevert",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "target",
              },
              {
                type: "bytes",
                name: "data",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "depositTo",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [
              {
                type: "address",
                name: "account",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "deposits",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
              },
            ],
            outputs: [
              {
                type: "uint256",
                name: "deposit",
              },
              {
                type: "bool",
                name: "staked",
              },
              {
                type: "uint112",
                name: "stake",
              },
              {
                type: "uint32",
                name: "unstakeDelaySec",
              },
              {
                type: "uint48",
                name: "withdrawTime",
              },
            ],
          },
          {
            type: "function",
            name: "getDepositInfo",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "account",
              },
            ],
            outputs: [
              {
                type: "tuple",
                name: "info",
                components: [
                  {
                    type: "uint256",
                    name: "deposit",
                  },
                  {
                    type: "bool",
                    name: "staked",
                  },
                  {
                    type: "uint112",
                    name: "stake",
                  },
                  {
                    type: "uint32",
                    name: "unstakeDelaySec",
                  },
                  {
                    type: "uint48",
                    name: "withdrawTime",
                  },
                ],
              },
            ],
          },
          {
            type: "function",
            name: "getNonce",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "sender",
              },
              {
                type: "uint192",
                name: "key",
              },
            ],
            outputs: [
              {
                type: "uint256",
                name: "nonce",
              },
            ],
          },
          {
            type: "function",
            name: "getSenderAddress",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "bytes",
                name: "initCode",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "getUserOpHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "tuple",
                name: "userOp",
                components: [
                  {
                    type: "address",
                    name: "sender",
                  },
                  {
                    type: "uint256",
                    name: "nonce",
                  },
                  {
                    type: "bytes",
                    name: "initCode",
                  },
                  {
                    type: "bytes",
                    name: "callData",
                  },
                  {
                    type: "bytes32",
                    name: "accountGasLimits",
                  },
                  {
                    type: "uint256",
                    name: "preVerificationGas",
                  },
                  {
                    type: "bytes32",
                    name: "gasFees",
                  },
                  {
                    type: "bytes",
                    name: "paymasterAndData",
                  },
                  {
                    type: "bytes",
                    name: "signature",
                  },
                ],
              },
            ],
            outputs: [
              {
                type: "bytes32",
              },
            ],
          },
          {
            type: "function",
            name: "handleAggregatedOps",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "tuple[]",
                name: "opsPerAggregator",
                components: [
                  {
                    type: "tuple[]",
                    name: "userOps",
                    components: [
                      {
                        type: "address",
                        name: "sender",
                      },
                      {
                        type: "uint256",
                        name: "nonce",
                      },
                      {
                        type: "bytes",
                        name: "initCode",
                      },
                      {
                        type: "bytes",
                        name: "callData",
                      },
                      {
                        type: "bytes32",
                        name: "accountGasLimits",
                      },
                      {
                        type: "uint256",
                        name: "preVerificationGas",
                      },
                      {
                        type: "bytes32",
                        name: "gasFees",
                      },
                      {
                        type: "bytes",
                        name: "paymasterAndData",
                      },
                      {
                        type: "bytes",
                        name: "signature",
                      },
                    ],
                  },
                  {
                    type: "address",
                    name: "aggregator",
                  },
                  {
                    type: "bytes",
                    name: "signature",
                  },
                ],
              },
              {
                type: "address",
                name: "beneficiary",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "handleOps",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "tuple[]",
                name: "ops",
                components: [
                  {
                    type: "address",
                    name: "sender",
                  },
                  {
                    type: "uint256",
                    name: "nonce",
                  },
                  {
                    type: "bytes",
                    name: "initCode",
                  },
                  {
                    type: "bytes",
                    name: "callData",
                  },
                  {
                    type: "bytes32",
                    name: "accountGasLimits",
                  },
                  {
                    type: "uint256",
                    name: "preVerificationGas",
                  },
                  {
                    type: "bytes32",
                    name: "gasFees",
                  },
                  {
                    type: "bytes",
                    name: "paymasterAndData",
                  },
                  {
                    type: "bytes",
                    name: "signature",
                  },
                ],
              },
              {
                type: "address",
                name: "beneficiary",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "incrementNonce",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "uint192",
                name: "key",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "innerHandleOp",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "bytes",
                name: "callData",
              },
              {
                type: "tuple",
                name: "opInfo",
                components: [
                  {
                    type: "tuple",
                    name: "mUserOp",
                    components: [
                      {
                        type: "address",
                        name: "sender",
                      },
                      {
                        type: "uint256",
                        name: "nonce",
                      },
                      {
                        type: "uint256",
                        name: "verificationGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "callGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "paymasterVerificationGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "paymasterPostOpGasLimit",
                      },
                      {
                        type: "uint256",
                        name: "preVerificationGas",
                      },
                      {
                        type: "address",
                        name: "paymaster",
                      },
                      {
                        type: "uint256",
                        name: "maxFeePerGas",
                      },
                      {
                        type: "uint256",
                        name: "maxPriorityFeePerGas",
                      },
                    ],
                  },
                  {
                    type: "bytes32",
                    name: "userOpHash",
                  },
                  {
                    type: "uint256",
                    name: "prefund",
                  },
                  {
                    type: "uint256",
                    name: "contextOffset",
                  },
                  {
                    type: "uint256",
                    name: "preOpGas",
                  },
                ],
              },
              {
                type: "bytes",
                name: "context",
              },
            ],
            outputs: [
              {
                type: "uint256",
                name: "actualGasCost",
              },
            ],
          },
          {
            type: "function",
            name: "nonceSequenceNumber",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
              },
              {
                type: "uint192",
              },
            ],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "supportsInterface",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "bytes4",
                name: "interfaceId",
              },
            ],
            outputs: [
              {
                type: "bool",
              },
            ],
          },
          {
            type: "function",
            name: "unlockStake",
            constant: false,
            payable: false,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "withdrawStake",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "withdrawAddress",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "withdrawTo",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "withdrawAddress",
              },
              {
                type: "uint256",
                name: "withdrawAmount",
              },
            ],
            outputs: [],
          },
        ],
        addresses: ["0x0000000071727De22E5E9d8BAf0edAc6f37da032"],
        confirmBlocks: 1,
        network: "base-sepolia",
        chainId: 84532,
      },
      type: "BLOCK",
      value: "0x0",
    },
  } as ActionRequestData,
};

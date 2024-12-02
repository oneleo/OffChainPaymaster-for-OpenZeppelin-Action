import {
  ActionEvent,
  PreviousActionRunInfo,
  ActionRequestData,
  ActionSecretsMap,
} from "@openzeppelin/defender-sdk-action-client";

const alchemyApiKey = "";
const discordWebhookLink = "";
const slackWebhookLink = "";

// Refer: https://v2.jiffyscan.xyz/tx/0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836?network=optimism
export const handleOpsOptimismActionEvent: ActionEvent = {
  //   autotaskId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
  //   autotaskName: "UserOpProcessed() PostOpRevertReason()",
  //   autotaskRunId: "ba358c0a-8e10-40f8-9265-e2e73436ef8b",
  credentials: "",
  kvstoreARN:
    "arn:aws:lambda:us-west-2:665768922667:function:defender-prod-proxy-kvstore:908248ed-89a7-45ee-939e-32162153d129_STORE",
  previousRun: {
    trigger: "monitor", // "sentinel",
    status: "success",
    createdAt: "2024-11-18T02:57:37.925Z",
    // autotaskId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
    actionId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
    // result: "null",
    // statusCreatedAt: "success|2024-11-18T02:57:37.925Z",
    // autotaskRunId: "d8dc3eed-44fd-44e6-b179-d3efce46c81c",
    actionRunId: "d8dc3eed-44fd-44e6-b179-d3efce46c81c",
  } as PreviousActionRunInfo,
  //   tenantId: "908248ed-89a7-45ee-939e-32162153d129",
  //   trigger: "sentinel",
  actionId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
  actionName: "UserOpProcessed() PostOpRevertReason()",
  actionRunId: "ba358c0a-8e10-40f8-9265-e2e73436ef8b",
  secrets: {
    DISCORD_PAYMASTER_CHANNEL_WEBHOOK: discordWebhookLink,
    SLACK_PAYMASTER_CHANNEL_WEBHOOK: slackWebhookLink,
    ALCHEMY_API_KEY: alchemyApiKey,
    MONITORED_PAYMASTER_ADDRESSES:
      '["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c","0xbd7815594E6CeBdd2772A3676Ca29dB096f1Ec46","0x366359ADf61B97b011825bB7816F8c061027502f","0x1833bC4f1e2F33F3eE40e08fA55C26ce9C218Bcf","0xe3FA5B3378d30c9870Fda4249A0d6E4637d760B3"]',
  } as ActionSecretsMap,
  request: {
    body: {
      hash: "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
      transaction: {
        transactionHash:
          "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
        blockHash:
          "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
        blockNumber: "0x7a36a11",
        l1BlobBaseFeeScalar: "0xf79c5",
        logsBloom:
          "0x00000000000000000000000000000000000000000000040000000000000002000008000000000000000000010000000000080000800000000000020000208000080000000000000000000008000008000040000000001010000000021000000000000000000800000000000000000040100040000000000000000010000000004000000000000000000000000000000000000000000000000000000010000000020000000002000000400008000200008000800100000004020002000000000000000002000000400001000000001000000000000000000000000000000400000010010000000000000000000000000000010000000010000000000000000000",
        l1GasUsed: "0x2555",
        l1Fee: "0x147e7572133",
        contractAddress: null,
        transactionIndex: "0x1c",
        l1GasPrice: "0x25ae5868c",
        l1BaseFeeScalar: "0x146b",
        type: "0x2",
        l1BlobBaseFee: "0x58d858bc",
        gasUsed: "0x6f890",
        cumulativeGasUsed: "0x61efb0",
        from: "0x2ce3fb4ea6a849cc49f68bdbeaa4912a920bdfd8",
        to: "0x0000000071727de22e5e9d8baf0edac6f37da032",
        effectiveGasPrice: "0x18a8e",
        logs: [
          {
            blockHash:
              "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            logIndex: "0x5a",
            data: "0x",
            removed: false,
            topics: [
              "0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972",
            ],
            blockNumber: "0x7a36a11",
            transactionIndex: "0x1c",
            transactionHash:
              "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
          },
          {
            blockHash:
              "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
            address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
            logIndex: "0x5b",
            data: "0x00000000000000000000000000000000000000000000000000082bd67afbc000",
            removed: false,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000bc78767d28c0695a30bef715af96ad4daa446ade",
              "0x0000000000000000000000003b7fda9022942273a8a104d2bf3f43450735989c",
            ],
            blockNumber: "0x7a36a11",
            transactionIndex: "0x1c",
            transactionHash:
              "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
          },
          {
            blockHash:
              "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
            address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
            logIndex: "0x5c",
            data: "0x0000000000000000000000000000000000000000000000000004e45b97d735bc",
            removed: false,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000bc78767d28c0695a30bef715af96ad4daa446ade",
              "0x000000000000000000000000ea044410edd0a5cc4084598a523abbce5a6807b0",
            ],
            blockNumber: "0x7a36a11",
            transactionIndex: "0x1c",
            transactionHash:
              "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
          },
          {
            blockHash:
              "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
            address: "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
            logIndex: "0x5d",
            data: "0xffffffffffffffffffffffffffffffffffffffffffffffffffd3e2c6e6eb8326",
            removed: false,
            topics: [
              "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              "0x000000000000000000000000bc78767d28c0695a30bef715af96ad4daa446ade",
              "0x000000000000000000000000f67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            ],
            blockNumber: "0x7a36a11",
            transactionIndex: "0x1c",
            transactionHash:
              "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
          },
          {
            blockHash:
              "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
            address: "0xf67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            logIndex: "0x5e",
            data: "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000030db565d7840000000000000000000000006fd9d7ad17242c41f7131d257212c54a0e8166910000000000000000000000000000000000000000000000000004e45b97d735bc000000000000000000000000bc78767d28c0695a30bef715af96ad4daa446ade0000000000000000000000000000000000000000000000000000000000000001",
            removed: false,
            topics: [
              "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9",
              "0x5c93649db2cfd6cd4d4d963270673562dd822bec60dea54b147f164f40ebce46",
              "0x000000000000000000000000191958b8dd14d2827de3fa899bbca5a3e78d3c8b",
              "0xeda851bc763e17851710e8e97596a2ce349d67b24cabb131b8f2e00382fd4758",
            ],
            blockNumber: "0x7a36a11",
            transactionIndex: "0x1c",
            transactionHash:
              "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
          },
          {
            blockHash:
              "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            logIndex: "0x5f",
            data: "0x000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000318c6c5ad500000000000000000000000000000000000000000000000000000000000251598",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0x5c93649db2cfd6cd4d4d963270673562dd822bec60dea54b147f164f40ebce46",
              "0x000000000000000000000000191958b8dd14d2827de3fa899bbca5a3e78d3c8b",
              "0x000000000000000000000000f67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            ],
            blockNumber: "0x7a36a11",
            transactionIndex: "0x1c",
            transactionHash:
              "0x32b8fb62f7eb7e7c16f747b335d67020b0e9426203b2283dc5b80e307051e836",
          },
        ],
        status: "0x1",
      },
      blockHash:
        "0x464644d02ac08a81295abb05c2d920f06be2ea746ac21019ea51bbe475ecdab5",
      blockNumber: "0x7a36a11",
      timestamp: 1731898843,
      matchReasons: [
        {
          type: "event",
          signature:
            "UserOpProcessed(bytes32,address,bytes32,uint8,uint256,address,uint256,address,bool)",
          address: "0xf67f1bb6817a138ed3c8f383a35b98d695f7e12c",
          args: [
            "0x5c93649db2cfd6cd4d4d963270673562dd822bec60dea54b147f164f40ebce46",
            "0x191958b8dd14D2827DE3fa899bbca5A3e78D3C8b",
            "0xeda851bc763e17851710e8e97596a2ce349d67b24cabb131b8f2e00382fd4758",
            1,
            "3357412808580",
            "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
            "1376981947463100",
            "0xbc78767d28C0695a30BEf715aF96ad4daA446Ade",
            true,
          ],
          params: {
            userOpHash:
              "0x5c93649db2cfd6cd4d4d963270673562dd822bec60dea54b147f164f40ebce46",
            userOpSender: "0x191958b8dd14D2827DE3fa899bbca5A3e78D3C8b",
            signerDataHash:
              "0xeda851bc763e17851710e8e97596a2ce349d67b24cabb131b8f2e00382fd4758",
            mode: 1,
            actualGasCost: "3357412808580",
            token: "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
            actualTokenCost: "1376981947463100",
            chargeFrom: "0xbc78767d28C0695a30BEf715aF96ad4daA446Ade",
            chargeSuccessful: true,
          },
        },
      ],
      matchedAddresses: ["0xf67f1bb6817a138ed3c8f383a35b98d695f7e12c"],
      matchedChecksumAddresses: ["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c"],
      sentinel: {
        id: "1f7a0ca8-ba02-4479-aea0-ba61e6dbf262",
        name: "OffChainPaymaster UserOpProcessed()",
        abi: [
          {
            type: "event",
            anonymous: false,
            name: "OwnershipTransferred",
            inputs: [
              {
                type: "address",
                name: "previousOwner",
                indexed: true,
              },
              {
                type: "address",
                name: "newOwner",
                indexed: true,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOpProcessed",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "userOpSender",
                indexed: true,
              },
              {
                type: "bytes32",
                name: "signerDataHash",
                indexed: true,
              },
              {
                type: "uint8",
                name: "mode",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasCost",
                indexed: false,
              },
              {
                type: "address",
                name: "token",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualTokenCost",
                indexed: false,
              },
              {
                type: "address",
                name: "chargeFrom",
                indexed: false,
              },
              {
                type: "bool",
                name: "chargeSuccessful",
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
            name: "computePaymentDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
              },
              {
                type: "tuple",
                name: "paymentData",
                components: [
                  {
                    type: "address",
                    name: "chargeFrom",
                  },
                  {
                    type: "address",
                    name: "token",
                  },
                  {
                    type: "uint256",
                    name: "tokenDecimal",
                  },
                  {
                    type: "uint256",
                    name: "conversionRate",
                  },
                  {
                    type: "uint256",
                    name: "conversionRateDecimal",
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
            name: "computeSponsorDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
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
            name: "computeUserOpDataHash",
            constant: true,
            stateMutability: "pure",
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
            name: "deposit",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "entryPoint",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "feeCollector",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "getDeposit",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "isSignerAllowed",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "signer",
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
            name: "owner",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "postOp",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "uint8",
                name: "mode",
              },
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "actualGasCost",
              },
              {
                type: "uint256",
                name: "actualUserOpFeePerGas",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "renounceOwnership",
            constant: false,
            payable: false,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "setFeeCollector",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "_feeCollector",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "transferOwnership",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "newOwner",
              },
            ],
            outputs: [],
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
            name: "updateAllowedSigners",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address[]",
                name: "signers",
              },
              {
                type: "bool[]",
                name: "alloweds",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "validatePaymasterUserOp",
            constant: false,
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
              {
                type: "bytes32",
                name: "userOpHash",
              },
              {
                type: "uint256",
                name: "maxCost",
              },
            ],
            outputs: [
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "validationData",
              },
            ],
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
                name: "amount",
              },
            ],
            outputs: [],
          },
        ],
        addresses: ["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c"],
        confirmBlocks: 1,
        network: "optimism",
        chainId: 10,
      },
      monitor: {
        id: "1f7a0ca8-ba02-4479-aea0-ba61e6dbf262",
        name: "OffChainPaymaster UserOpProcessed()",
        abi: [
          {
            type: "event",
            anonymous: false,
            name: "OwnershipTransferred",
            inputs: [
              {
                type: "address",
                name: "previousOwner",
                indexed: true,
              },
              {
                type: "address",
                name: "newOwner",
                indexed: true,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOpProcessed",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "userOpSender",
                indexed: true,
              },
              {
                type: "bytes32",
                name: "signerDataHash",
                indexed: true,
              },
              {
                type: "uint8",
                name: "mode",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasCost",
                indexed: false,
              },
              {
                type: "address",
                name: "token",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualTokenCost",
                indexed: false,
              },
              {
                type: "address",
                name: "chargeFrom",
                indexed: false,
              },
              {
                type: "bool",
                name: "chargeSuccessful",
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
            name: "computePaymentDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
              },
              {
                type: "tuple",
                name: "paymentData",
                components: [
                  {
                    type: "address",
                    name: "chargeFrom",
                  },
                  {
                    type: "address",
                    name: "token",
                  },
                  {
                    type: "uint256",
                    name: "tokenDecimal",
                  },
                  {
                    type: "uint256",
                    name: "conversionRate",
                  },
                  {
                    type: "uint256",
                    name: "conversionRateDecimal",
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
            name: "computeSponsorDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
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
            name: "computeUserOpDataHash",
            constant: true,
            stateMutability: "pure",
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
            name: "deposit",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "entryPoint",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "feeCollector",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "getDeposit",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "isSignerAllowed",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "signer",
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
            name: "owner",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "postOp",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "uint8",
                name: "mode",
              },
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "actualGasCost",
              },
              {
                type: "uint256",
                name: "actualUserOpFeePerGas",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "renounceOwnership",
            constant: false,
            payable: false,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "setFeeCollector",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "_feeCollector",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "transferOwnership",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "newOwner",
              },
            ],
            outputs: [],
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
            name: "updateAllowedSigners",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address[]",
                name: "signers",
              },
              {
                type: "bool[]",
                name: "alloweds",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "validatePaymasterUserOp",
            constant: false,
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
              {
                type: "bytes32",
                name: "userOpHash",
              },
              {
                type: "uint256",
                name: "maxCost",
              },
            ],
            outputs: [
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "validationData",
              },
            ],
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
                name: "amount",
              },
            ],
            outputs: [],
          },
        ],
        addresses: ["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c"],
        confirmBlocks: 1,
        network: "optimism",
        chainId: 10,
      },
      type: "BLOCK",
      value: "0x0",
    },
  } as ActionRequestData,
};

// Refer: https://v2.jiffyscan.xyz/tx/0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0?network=arbitrum-one
export const handleOpsArbitrumActionEvent: ActionEvent = {
  //   autotaskId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
  //   autotaskName: "UserOpProcessed() PostOpRevertReason()",
  //   autotaskRunId: "ded11ab7-45e5-4eaf-b4e4-1115487b3505",
  credentials: "",
  kvstoreARN:
    "arn:aws:lambda:us-west-2:665768922667:function:defender-prod-proxy-kvstore:908248ed-89a7-45ee-939e-32162153d129_STORE",
  previousRun: {
    trigger: "monitor", // "sentinel",
    status: "success",
    createdAt: "2024-11-16T10:07:10.992Z",
    // autotaskId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
    actionId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
    // result: "null",
    // statusCreatedAt: "success|2024-11-16T10:07:10.992Z",
    // autotaskRunId: "93b54b25-99fb-4884-8844-658dda12ed8b",
    actionRunId: "93b54b25-99fb-4884-8844-658dda12ed8b",
  } as PreviousActionRunInfo,
  //   tenantId: "908248ed-89a7-45ee-939e-32162153d129",
  //   trigger: "sentinel",
  actionId: "1b529b2c-ec5f-49e4-ad91-7bfa8bbaa278",
  actionName: "UserOpProcessed() PostOpRevertReason()",
  actionRunId: "ded11ab7-45e5-4eaf-b4e4-1115487b3505",
  secrets: {
    DISCORD_PAYMASTER_CHANNEL_WEBHOOK: discordWebhookLink,
    SLACK_PAYMASTER_CHANNEL_WEBHOOK: slackWebhookLink,
    ALCHEMY_API_KEY: alchemyApiKey,
    MONITORED_PAYMASTER_ADDRESSES:
      '["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c","0xbd7815594E6CeBdd2772A3676Ca29dB096f1Ec46","0x366359ADf61B97b011825bB7816F8c061027502f","0x1833bC4f1e2F33F3eE40e08fA55C26ce9C218Bcf","0xe3FA5B3378d30c9870Fda4249A0d6E4637d760B3"]',
  } as ActionSecretsMap,
  request: {
    body: {
      hash: "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
      transaction: {
        transactionHash:
          "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
        blockHash:
          "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
        blockNumber: "0x1064af84",
        logsBloom:
          "0x0000400000000000000000000000000000000000c000040000000000000200000008000000000000000008010000000000081000800000000000020000200000000000000000000000000008000400000040000000001010000000020000000000000000000800000000000000000040000040000000000000000010000000004000000000000000000000000000000002000000000000001000080000000000020000000000000000400008000000000000000040000000000402002000000000000002000002600001000000000000000000000000000000000000000000000010010000000000000000000000000000010000000000200000040004000000",
        l1BlockNumber: "0x1437ae7",
        contractAddress: null,
        transactionIndex: "0x1",
        type: "0x2",
        gasUsed: "0x1a1efc",
        cumulativeGasUsed: "0x1a1efc",
        from: "0x2ce3fb4ea6a849cc49f68bdbeaa4912a920bdfd8",
        to: "0x0000000071727de22e5e9d8baf0edac6f37da032",
        effectiveGasPrice: "0x989680",
        logs: [
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            logIndex: "0x0",
            data: "0x",
            removed: false,
            topics: [
              "0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            logIndex: "0x1",
            data: "0x000000000000000000000000000000000000000000000000000000174876e800",
            removed: false,
            topics: [
              "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              "0x000000000000000000000000c54afa33a324327073818f477eb9b1d5efc4f5ca",
              "0x000000000000000000000000f67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            logIndex: "0x2",
            data: "0x0000000000000000000000000000000000000000000000000000000000000384",
            removed: false,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000c54afa33a324327073818f477eb9b1d5efc4f5ca",
              "0x000000000000000000000000cd44fb31f1aaf8880a833fbdd9384488e0188825",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            logIndex: "0x3",
            data: "0x0000000000000000000000000000000000000000000000000000000000000086",
            removed: false,
            topics: [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000c54afa33a324327073818f477eb9b1d5efc4f5ca",
              "0x000000000000000000000000ea044410edd0a5cc4084598a523abbce5a6807b0",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            logIndex: "0x4",
            data: "0x000000000000000000000000000000000000000000000000000000174876e77a",
            removed: false,
            topics: [
              "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              "0x000000000000000000000000c54afa33a324327073818f477eb9b1d5efc4f5ca",
              "0x000000000000000000000000f67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0xf67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            logIndex: "0x5",
            data: "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000001c6a8c7f31280000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f0000000000000000000000000000000000000000000000000000000000000086000000000000000000000000c54afa33a324327073818f477eb9b1d5efc4f5ca0000000000000000000000000000000000000000000000000000000000000001",
            removed: false,
            topics: [
              "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9",
              "0xb9a39b57c80d1af08ed16fb218486da4f7a48a2c3b2400058c69ab604c033ee4",
              "0x000000000000000000000000a2ab512c1284926a220564454647cb3ecbdfeaeb",
              "0xbfcc3d08aca467f4379bba8cd99023bafaf0936bc3f8d8c3465a333788af1422",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
          {
            blockHash:
              "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            logIndex: "0x6",
            data: "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000001cba2ffbc94800000000000000000000000000000000000000000000000000000000002c42f5",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0xb9a39b57c80d1af08ed16fb218486da4f7a48a2c3b2400058c69ab604c033ee4",
              "0x000000000000000000000000a2ab512c1284926a220564454647cb3ecbdfeaeb",
              "0x000000000000000000000000f67f1bb6817a138ed3c8f383a35b98d695f7e12c",
            ],
            blockNumber: "0x1064af84",
            transactionIndex: "0x1",
            transactionHash:
              "0x3ca5ca31c273c13e908249ed63c453f9629bd5e6682c51e2bb9f64610acd25e0",
          },
        ],
        status: "0x1",
        gasUsedForL1: "0x128b9e",
      },
      blockHash:
        "0xd7ae3028a59fccbcb0cb26a5792e1b57b644c99b843942be4dffac124e2cfbcf",
      blockNumber: "0x1064af84",
      timestamp: 1731752099,
      matchReasons: [
        {
          type: "event",
          signature:
            "UserOpProcessed(bytes32,address,bytes32,uint8,uint256,address,uint256,address,bool)",
          address: "0xf67f1bb6817a138ed3c8f383a35b98d695f7e12c",
          args: [
            "0xb9a39b57c80d1af08ed16fb218486da4f7a48a2c3b2400058c69ab604c033ee4",
            "0xa2ab512C1284926A220564454647cB3ECBDFEAeb",
            "0xbfcc3d08aca467f4379bba8cd99023bafaf0936bc3f8d8c3465a333788af1422",
            1,
            "31243949257000",
            "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
            "134",
            "0xC54AfA33a324327073818F477eB9b1d5EFc4F5ca",
            true,
          ],
          params: {
            userOpHash:
              "0xb9a39b57c80d1af08ed16fb218486da4f7a48a2c3b2400058c69ab604c033ee4",
            userOpSender: "0xa2ab512C1284926A220564454647cB3ECBDFEAeb",
            signerDataHash:
              "0xbfcc3d08aca467f4379bba8cd99023bafaf0936bc3f8d8c3465a333788af1422",
            mode: 1,
            actualGasCost: "31243949257000",
            token: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
            actualTokenCost: "134",
            chargeFrom: "0xC54AfA33a324327073818F477eB9b1d5EFc4F5ca",
            chargeSuccessful: true,
          },
        },
      ],
      matchedAddresses: ["0xf67f1bb6817a138ed3c8f383a35b98d695f7e12c"],
      matchedChecksumAddresses: ["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c"],
      sentinel: {
        id: "8396e77f-f634-45b4-85da-4a3b9e44b4d3",
        name: "OffChainPaymaster UserOpProcessed()",
        abi: [
          {
            type: "event",
            anonymous: false,
            name: "OwnershipTransferred",
            inputs: [
              {
                type: "address",
                name: "previousOwner",
                indexed: true,
              },
              {
                type: "address",
                name: "newOwner",
                indexed: true,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOpProcessed",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "userOpSender",
                indexed: true,
              },
              {
                type: "bytes32",
                name: "signerDataHash",
                indexed: true,
              },
              {
                type: "uint8",
                name: "mode",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasCost",
                indexed: false,
              },
              {
                type: "address",
                name: "token",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualTokenCost",
                indexed: false,
              },
              {
                type: "address",
                name: "chargeFrom",
                indexed: false,
              },
              {
                type: "bool",
                name: "chargeSuccessful",
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
            name: "computePaymentDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
              },
              {
                type: "tuple",
                name: "paymentData",
                components: [
                  {
                    type: "address",
                    name: "chargeFrom",
                  },
                  {
                    type: "address",
                    name: "token",
                  },
                  {
                    type: "uint256",
                    name: "tokenDecimal",
                  },
                  {
                    type: "uint256",
                    name: "conversionRate",
                  },
                  {
                    type: "uint256",
                    name: "conversionRateDecimal",
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
            name: "computeSponsorDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
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
            name: "computeUserOpDataHash",
            constant: true,
            stateMutability: "pure",
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
            name: "deposit",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "entryPoint",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "feeCollector",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "getDeposit",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "isSignerAllowed",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "signer",
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
            name: "owner",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "postOp",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "uint8",
                name: "mode",
              },
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "actualGasCost",
              },
              {
                type: "uint256",
                name: "actualUserOpFeePerGas",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "renounceOwnership",
            constant: false,
            payable: false,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "setFeeCollector",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "_feeCollector",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "transferOwnership",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "newOwner",
              },
            ],
            outputs: [],
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
            name: "updateAllowedSigners",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address[]",
                name: "signers",
              },
              {
                type: "bool[]",
                name: "alloweds",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "validatePaymasterUserOp",
            constant: false,
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
              {
                type: "bytes32",
                name: "userOpHash",
              },
              {
                type: "uint256",
                name: "maxCost",
              },
            ],
            outputs: [
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "validationData",
              },
            ],
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
                name: "amount",
              },
            ],
            outputs: [],
          },
        ],
        addresses: ["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c"],
        confirmBlocks: 1,
        network: "arbitrum",
        chainId: 42161,
      },
      monitor: {
        id: "8396e77f-f634-45b4-85da-4a3b9e44b4d3",
        name: "OffChainPaymaster UserOpProcessed()",
        abi: [
          {
            type: "event",
            anonymous: false,
            name: "OwnershipTransferred",
            inputs: [
              {
                type: "address",
                name: "previousOwner",
                indexed: true,
              },
              {
                type: "address",
                name: "newOwner",
                indexed: true,
              },
            ],
          },
          {
            type: "event",
            anonymous: false,
            name: "UserOpProcessed",
            inputs: [
              {
                type: "bytes32",
                name: "userOpHash",
                indexed: true,
              },
              {
                type: "address",
                name: "userOpSender",
                indexed: true,
              },
              {
                type: "bytes32",
                name: "signerDataHash",
                indexed: true,
              },
              {
                type: "uint8",
                name: "mode",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualGasCost",
                indexed: false,
              },
              {
                type: "address",
                name: "token",
                indexed: false,
              },
              {
                type: "uint256",
                name: "actualTokenCost",
                indexed: false,
              },
              {
                type: "address",
                name: "chargeFrom",
                indexed: false,
              },
              {
                type: "bool",
                name: "chargeSuccessful",
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
            name: "computePaymentDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
              },
              {
                type: "tuple",
                name: "paymentData",
                components: [
                  {
                    type: "address",
                    name: "chargeFrom",
                  },
                  {
                    type: "address",
                    name: "token",
                  },
                  {
                    type: "uint256",
                    name: "tokenDecimal",
                  },
                  {
                    type: "uint256",
                    name: "conversionRate",
                  },
                  {
                    type: "uint256",
                    name: "conversionRateDecimal",
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
            name: "computeSponsorDataHash",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "uint48",
                name: "validAfter",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "bytes32",
                name: "userOpDataHash",
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
            name: "computeUserOpDataHash",
            constant: true,
            stateMutability: "pure",
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
            name: "deposit",
            constant: false,
            stateMutability: "payable",
            payable: true,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "entryPoint",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "feeCollector",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "getDeposit",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "uint256",
              },
            ],
          },
          {
            type: "function",
            name: "isSignerAllowed",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [
              {
                type: "address",
                name: "signer",
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
            name: "owner",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "address",
              },
            ],
          },
          {
            type: "function",
            name: "postOp",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "uint8",
                name: "mode",
              },
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "actualGasCost",
              },
              {
                type: "uint256",
                name: "actualUserOpFeePerGas",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "renounceOwnership",
            constant: false,
            payable: false,
            inputs: [],
            outputs: [],
          },
          {
            type: "function",
            name: "setFeeCollector",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "_feeCollector",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "transferOwnership",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address",
                name: "newOwner",
              },
            ],
            outputs: [],
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
            name: "updateAllowedSigners",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "address[]",
                name: "signers",
              },
              {
                type: "bool[]",
                name: "alloweds",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "validatePaymasterUserOp",
            constant: false,
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
              {
                type: "bytes32",
                name: "userOpHash",
              },
              {
                type: "uint256",
                name: "maxCost",
              },
            ],
            outputs: [
              {
                type: "bytes",
                name: "context",
              },
              {
                type: "uint256",
                name: "validationData",
              },
            ],
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
                name: "amount",
              },
            ],
            outputs: [],
          },
        ],
        addresses: ["0xf67f1bB6817a138eD3C8f383a35B98D695f7E12c"],
        confirmBlocks: 1,
        network: "arbitrum",
        chainId: 42161,
      },
      type: "BLOCK",
      value: "0x0",
    },
  } as ActionRequestData,
};

// Refer: https://v2.jiffyscan.xyz/tx/0x8685d354aea598502377987e4f40071c8cca53de1d7e079cd93e0f49f71499c8?network=base-sepolia
export const handleOpsBaseSepoliaActionEvent: ActionEvent = {
  // "autotaskId": "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
  // "autotaskName": "Emit OffChainPaymaster UserOpProcessed()",
  // "autotaskRunId": "901d49b9-e8e8-4c70-9125-cb4217b54745",
  credentials: "",
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
    DISCORD_PAYMASTER_CHANNEL_WEBHOOK: discordWebhookLink,
    SLACK_PAYMASTER_CHANNEL_WEBHOOK: slackWebhookLink,
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

import {
  ActionEvent,
  PreviousActionRunInfo,
  ActionRequestData,
  ActionSecretsMap,
} from "@openzeppelin/defender-sdk-action-client";

// Refer: https://sepolia.basescan.org/tx/0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67
export const handleOpsActionEvent: ActionEvent = {
  //   autotaskId: "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
  //   autotaskName: "Emit OffChainPaymaster UserOpProcessed()",
  //   autotaskRunId: "413e5c33-b7ac-4ce8-9263-dc6a5ecf2121",
  kvstoreARN:
    "arn:aws:lambda:us-west-2:665768922667:function:defender-prod-proxy-kvstore:f7e72970-78da-4606-bf2c-841684eeee96_STORE",
  previousRun: {
    trigger: "monitor",
    status: "success",
    createdAt: "2024-10-17T10:04:10.087Z",
    actionId: "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
    // result: "null",
    // statusCreatedAt: "success|2024-10-17T10:04:10.087Z",
    actionRunId: "15c5276c-7298-4720-ad8e-a77e0d601b11",
  } as PreviousActionRunInfo,
  //   tenantId: "f7e72970-78da-4606-bf2c-841684eeee96",
  //   trigger: "sentinel",
  actionId: "e5e189cc-8494-45b6-958b-e05fbf4d2ee2",
  actionName: "Emit OffChainPaymaster UserOpProcessed()",
  actionRunId: "413e5c33-b7ac-4ce8-9263-dc6a5ecf2121",
  secrets: {
    MONITORED_PAYMASTER_ADDRESSES:
      '["0x44D6f8362c144A1217f24A11bE35f2c418B6cb20","0xBDd6EB5C9A89f21B559f65C6b2bbeC265cE54C82"]',
    DISCORD_PAYMASTER_CHANNEL_WEBHOOK: "",
  } as ActionSecretsMap,
  request: {
    body: {
      hash: "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
      transaction: {
        blockHash:
          "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
        blockNumber: "0xff5a15",
        contractAddress: null,
        cumulativeGasUsed: "0x74548b",
        effectiveGasPrice: "0x423c5bf7",
        from: "0xe97b63899e72efbe9ab3f08967dee4edf1eb4270",
        gasUsed: "0x1e9df",
        l1BaseFeeScalar: "0x44d",
        l1BlobBaseFee: "0x1",
        l1BlobBaseFeeScalar: "0xa118b",
        l1Fee: "0xaa1279aa6",
        l1GasPrice: "0x220953de0",
        l1GasUsed: "0x11ba",
        logs: [
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
            blockNumber: "0xff5a15",
            data: "0x",
            logIndex: "0x3e",
            removed: false,
            topics: [
              "0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972",
            ],
            transactionHash:
              "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
            transactionIndex: "0x18",
          },
          {
            address: "0xbdd6eb5c9a89f21b559f65c6b2bbec265ce54c82",
            blockHash:
              "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
            blockNumber: "0xff5a15",
            data: "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000067b40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
            logIndex: "0x3f",
            removed: false,
            topics: [
              "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9",
              "0x426c7f414633e92ebf7e0bbaad6c64304c5df1f1e3dfd38b065cb14a901007bf",
              "0x000000000000000000000000934aa3a6997c3fa870c1a3d8e76bc49bf24c01de",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
            transactionHash:
              "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
            transactionIndex: "0x18",
          },
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
            blockNumber: "0xff5a15",
            data: "0x0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000391590000000000000000000000000000000000000000000000000000000000039159",
            logIndex: "0x40",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0x426c7f414633e92ebf7e0bbaad6c64304c5df1f1e3dfd38b065cb14a901007bf",
              "0x000000000000000000000000934aa3a6997c3fa870c1a3d8e76bc49bf24c01de",
              "0x000000000000000000000000bdd6eb5c9a89f21b559f65c6b2bbec265ce54c82",
            ],
            transactionHash:
              "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
            transactionIndex: "0x18",
          },
          {
            address: "0x44d6f8362c144a1217f24a11be35f2c418b6cb20",
            blockHash:
              "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
            blockNumber: "0xff5a15",
            data: "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000067a40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
            logIndex: "0x41",
            removed: false,
            topics: [
              "0x4a7d89094dad8258a8c7f96c6cad9b077fe57305ac3e2da96478295d1b48c7d9",
              "0xdaa6c86217d93a2b4f4f705c5b0a97cfd0759136f927f78851dec18681bc4876",
              "0x0000000000000000000000007047642db93f086235274fb95d212bdebaf4fefc",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
            transactionHash:
              "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
            transactionIndex: "0x18",
          },
          {
            address: "0x0000000071727de22e5e9d8baf0edac6f37da032",
            blockHash:
              "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
            blockNumber: "0xff5a15",
            data: "0x0000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000391cf00000000000000000000000000000000000000000000000000000000000391cf",
            logIndex: "0x42",
            removed: false,
            topics: [
              "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f",
              "0xdaa6c86217d93a2b4f4f705c5b0a97cfd0759136f927f78851dec18681bc4876",
              "0x0000000000000000000000007047642db93f086235274fb95d212bdebaf4fefc",
              "0x00000000000000000000000044d6f8362c144a1217f24a11be35f2c418b6cb20",
            ],
            transactionHash:
              "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
            transactionIndex: "0x18",
          },
        ],
        logsBloom:
          "0x00000000000000000000000008000000000000000080000000000000200000000008008000000000000000010000000001080000000000000000020000040000000000000000000000000000000000000040000020050000000000000000000000002000200800000000000000000000000040000000080000000000010000004000040000000800000000000000000000000000000400000200000000000000000000000000000000400000000000000002000000000000000002000000000000000000000000400001000000008000000000000800001000000800000140000000000000000000000000000000000000100000000000000000000100000800",
        status: "0x1",
        to: "0x0000000071727de22e5e9d8baf0edac6f37da032",
        transactionHash:
          "0xa2b9e51e84574daaca4cb37043686dbc00a58109a3e04aeaa4907d3d6c6f9d67",
        transactionIndex: "0x18",
        type: "0x2",
      },
      blockHash:
        "0x83802618de856a0435f200dce0bb7a3d36772e36cd081b6c2f77d3acba600161",
      blockNumber: "0xff5a15",
      timestamp: 1729237770,
      matchReasons: [
        {
          type: "event",
          signature:
            "UserOpProcessed(bytes32,address,bytes32,uint8,uint256,address,uint256,address,bool)",
          address: "0xbdd6eb5c9a89f21b559f65c6b2bbec265ce54c82",
          args: [
            "0x426c7f414633e92ebf7e0bbaad6c64304c5df1f1e3dfd38b065cb14a901007bf",
            "0x934Aa3A6997C3fA870c1a3D8E76Bc49Bf24c01de",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            1,
            "26548",
            "0x0000000000000000000000000000000000000001",
            "1",
            "0x0000000000000000000000000000000000000001",
            false,
          ],
          params: {
            userOpHash:
              "0x426c7f414633e92ebf7e0bbaad6c64304c5df1f1e3dfd38b065cb14a901007bf",
            userOpSender: "0x934Aa3A6997C3fA870c1a3D8E76Bc49Bf24c01de",
            signerDataHash:
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            mode: 1,
            actualGasCost: "26548",
            token: "0x0000000000000000000000000000000000000001",
            actualTokenCost: "1",
            chargeFrom: "0x0000000000000000000000000000000000000001",
            chargeSuccessful: false,
          },
        },
        {
          type: "event",
          signature:
            "UserOpProcessed(bytes32,address,bytes32,uint8,uint256,address,uint256,address,bool)",
          address: "0x44d6f8362c144a1217f24a11be35f2c418b6cb20",
          args: [
            "0xdaa6c86217d93a2b4f4f705c5b0a97cfd0759136f927f78851dec18681bc4876",
            "0x7047642Db93f086235274fb95d212bDebAF4feFc",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            1,
            "26532",
            "0x0000000000000000000000000000000000000001",
            "1",
            "0x0000000000000000000000000000000000000001",
            true,
          ],
          params: {
            userOpHash:
              "0xdaa6c86217d93a2b4f4f705c5b0a97cfd0759136f927f78851dec18681bc4876",
            userOpSender: "0x7047642Db93f086235274fb95d212bDebAF4feFc",
            signerDataHash:
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            mode: 1,
            actualGasCost: "26532",
            token: "0x0000000000000000000000000000000000000001",
            actualTokenCost: "1",
            chargeFrom: "0x0000000000000000000000000000000000000001",
            chargeSuccessful: true,
          },
        },
      ],
      matchedAddresses: [
        "0xbdd6eb5c9a89f21b559f65c6b2bbec265ce54c82",
        "0x44d6f8362c144a1217f24a11be35f2c418b6cb20",
      ],
      matchedChecksumAddresses: [
        "0xBDd6EB5C9A89f21B559f65C6b2bbeC265cE54C82",
        "0x44D6f8362c144A1217f24A11bE35f2c418B6cb20",
      ],
      sentinel: {
        id: "cb67a4b7-be48-4110-8db2-2d51f1dc100d",
        name: "Emit OffChainPaymaster UserOpProcessed()",
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
            name: "_packValidationData",
            constant: true,
            stateMutability: "pure",
            payable: false,
            inputs: [
              {
                type: "bool",
                name: "sigFailed",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "uint48",
                name: "validAfter",
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
            name: "setShouldPostOpFail",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "bool",
                name: "_shouldPostOpFail",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "shouldPostOpFail",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "bool",
              },
            ],
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
        addresses: [
          "0xBDd6EB5C9A89f21B559f65C6b2bbeC265cE54C82",
          "0x44D6f8362c144A1217f24A11bE35f2c418B6cb20",
        ],
        confirmBlocks: 1,
        network: "base-sepolia",
        chainId: 84532,
      },
      monitor: {
        id: "cb67a4b7-be48-4110-8db2-2d51f1dc100d",
        name: "Emit OffChainPaymaster UserOpProcessed()",
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
            name: "_packValidationData",
            constant: true,
            stateMutability: "pure",
            payable: false,
            inputs: [
              {
                type: "bool",
                name: "sigFailed",
              },
              {
                type: "uint48",
                name: "validUntil",
              },
              {
                type: "uint48",
                name: "validAfter",
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
            name: "setShouldPostOpFail",
            constant: false,
            payable: false,
            inputs: [
              {
                type: "bool",
                name: "_shouldPostOpFail",
              },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "shouldPostOpFail",
            constant: true,
            stateMutability: "view",
            payable: false,
            inputs: [],
            outputs: [
              {
                type: "bool",
              },
            ],
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
        addresses: [
          "0xBDd6EB5C9A89f21B559f65C6b2bbeC265cE54C82",
          "0x44D6f8362c144A1217f24A11bE35f2c418B6cb20",
        ],
        confirmBlocks: 1,
        network: "base-sepolia",
        chainId: 84532,
      },
      type: "BLOCK",
      value: "0x0",
    },
  } as ActionRequestData,
};

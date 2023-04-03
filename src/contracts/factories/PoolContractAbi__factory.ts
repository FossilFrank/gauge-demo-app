/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type {
  PoolContractAbi,
  PoolContractAbiInterface,
} from "../PoolContractAbi";
const _abi = {
  types: [
    {
      typeId: 0,
      type: "()",
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: "(_, _)",
      components: [
        {
          name: "__tuple_element",
          type: 7,
          typeArguments: null,
        },
        {
          name: "__tuple_element",
          type: 7,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 2,
      type: "(_, _)",
      components: [
        {
          name: "__tuple_element",
          type: 23,
          typeArguments: null,
        },
        {
          name: "__tuple_element",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
      type: "b256",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 4,
      type: "enum Error",
      components: [
        {
          name: "AlreadyInitialized",
          type: 0,
          typeArguments: null,
        },
        {
          name: "FeeTooHigh",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficentOutput",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficentLiquidity",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficentInput",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Invariant",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficentLiquidityMinted",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficentLiquidityBurned",
          type: 0,
          typeArguments: null,
        },
        {
          name: "MustBeCalledByVault",
          type: 0,
          typeArguments: null,
        },
        {
          name: "TWAPOutOfRange",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: "enum Identity",
      components: [
        {
          name: "Address",
          type: 6,
          typeArguments: null,
        },
        {
          name: "ContractId",
          type: 7,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 6,
      type: "struct Address",
      components: [
        {
          name: "value",
          type: 3,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 7,
      type: "struct ContractId",
      components: [
        {
          name: "value",
          type: 3,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: "struct FeeInfo",
      components: [
        {
          name: "current_fee",
          type: 21,
          typeArguments: null,
        },
        {
          name: "change_rate",
          type: 21,
          typeArguments: null,
        },
        {
          name: "update_time",
          type: 22,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: "struct LiquidityAddedEvent",
      components: [
        {
          name: "sender",
          type: 5,
          typeArguments: null,
        },
        {
          name: "amount_0",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1",
          type: 23,
          typeArguments: null,
        },
        {
          name: "lp_tokens",
          type: 23,
          typeArguments: null,
        },
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 10,
      type: "struct LiquidityRemovedEvent",
      components: [
        {
          name: "sender",
          type: 5,
          typeArguments: null,
        },
        {
          name: "amount_0",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1",
          type: 23,
          typeArguments: null,
        },
        {
          name: "lp_tokens",
          type: 23,
          typeArguments: null,
        },
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 11,
      type: "struct Observation",
      components: [
        {
          name: "timestamp",
          type: 23,
          typeArguments: null,
        },
        {
          name: "price_0_cumulative_last",
          type: 18,
          typeArguments: null,
        },
        {
          name: "price_1_cumulative_last",
          type: 18,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 12,
      type: "struct PoolInfo",
      components: [
        {
          name: "token_0_reserve",
          type: 23,
          typeArguments: null,
        },
        {
          name: "token_1_reserve",
          type: 23,
          typeArguments: null,
        },
        {
          name: "lp_token_supply",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 13,
      type: "struct ProtocolFeeCollectedEvent",
      components: [
        {
          name: "sender",
          type: 5,
          typeArguments: null,
        },
        {
          name: "amount_0",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 14,
      type: "struct ProtocolFeeWithdrawnEvent",
      components: [
        {
          name: "amount_0",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 15,
      type: "struct RemoveLiquidityInfo",
      components: [
        {
          name: "token_0_amount",
          type: 23,
          typeArguments: null,
        },
        {
          name: "token_1_amount",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 16,
      type: "struct SwapEvent",
      components: [
        {
          name: "sender",
          type: 5,
          typeArguments: null,
        },
        {
          name: "amount_0_in",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1_in",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_0_out",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1_out",
          type: 23,
          typeArguments: null,
        },
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 17,
      type: "struct TWAPInfo",
      components: [
        {
          name: "current_element",
          type: 23,
          typeArguments: null,
        },
        {
          name: "buffer_size",
          type: 23,
          typeArguments: null,
        },
        {
          name: "next_buffer_size",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 18,
      type: "struct U256",
      components: [
        {
          name: "a",
          type: 23,
          typeArguments: null,
        },
        {
          name: "b",
          type: 23,
          typeArguments: null,
        },
        {
          name: "c",
          type: 23,
          typeArguments: null,
        },
        {
          name: "d",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 19,
      type: "struct UpdateReservesEvent",
      components: [
        {
          name: "amount_0",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 20,
      type: "struct VaultInfo",
      components: [
        {
          name: "vault",
          type: 7,
          typeArguments: null,
        },
        {
          name: "token0_protocol_fees_collected",
          type: 23,
          typeArguments: null,
        },
        {
          name: "token1_protocol_fees_collected",
          type: 23,
          typeArguments: null,
        },
        {
          name: "current_fee",
          type: 21,
          typeArguments: null,
        },
        {
          name: "change_rate",
          type: 21,
          typeArguments: null,
        },
        {
          name: "update_time",
          type: 22,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 21,
      type: "u16",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 22,
      type: "u32",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 23,
      type: "u64",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "add_liquidity",
      output: {
        name: "",
        type: 23,
        typeArguments: null,
      },
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [],
      name: "cache_vault_fees",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "new_total_slots",
          type: 23,
          typeArguments: null,
        },
      ],
      name: "expand_twap_buffer",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [],
      name: "get_fee_info",
      output: {
        name: "",
        type: 8,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "slot",
          type: 23,
          typeArguments: null,
        },
      ],
      name: "get_observation",
      output: {
        name: "",
        type: 11,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "get_pool_info",
      output: {
        name: "",
        type: 12,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "get_tokens",
      output: {
        name: "tokens",
        type: 1,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "get_twap_info",
      output: {
        name: "",
        type: 17,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "get_vault_info",
      output: {
        name: "",
        type: 20,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "new_vault",
          type: 7,
          typeArguments: null,
        },
      ],
      name: "initialize",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "remove_liquidity",
      output: {
        name: "",
        type: 15,
        typeArguments: null,
      },
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "amount_0_out",
          type: 23,
          typeArguments: null,
        },
        {
          name: "amount_1_out",
          type: 23,
          typeArguments: null,
        },
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "swap",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "recipient",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "withdraw_protocol_fees",
      output: {
        name: "",
        type: 2,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: "",
        type: 19,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: "",
        type: 19,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 5,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 7,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 8,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 9,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 10,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 11,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 12,
      loggedType: {
        name: "",
        type: 19,
        typeArguments: [],
      },
    },
    {
      logId: 13,
      loggedType: {
        name: "",
        type: 10,
        typeArguments: [],
      },
    },
    {
      logId: 14,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 15,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 16,
      loggedType: {
        name: "",
        type: 13,
        typeArguments: [],
      },
    },
    {
      logId: 17,
      loggedType: {
        name: "",
        type: 13,
        typeArguments: [],
      },
    },
    {
      logId: 18,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 19,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 20,
      loggedType: {
        name: "",
        type: 19,
        typeArguments: [],
      },
    },
    {
      logId: 21,
      loggedType: {
        name: "",
        type: 16,
        typeArguments: [],
      },
    },
    {
      logId: 22,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 23,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 24,
      loggedType: {
        name: "",
        type: 4,
        typeArguments: [],
      },
    },
    {
      logId: 25,
      loggedType: {
        name: "",
        type: 14,
        typeArguments: [],
      },
    },
  ],
  messagesTypes: [],
  configurables: [],
};

export class PoolContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): PoolContractAbiInterface {
    return new Interface(_abi) as unknown as PoolContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): PoolContractAbi {
    return new Contract(
      id,
      _abi,
      walletOrProvider
    ) as unknown as PoolContractAbi;
  }
}
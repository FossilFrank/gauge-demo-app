/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type {
  VaultContractAbi,
  VaultContractAbiInterface,
} from "../VaultContractAbi";
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
      type: "b256",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 2,
      type: "enum Error",
      components: [
        {
          name: "MustBeCalledByOwner",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
      type: "enum Identity",
      components: [
        {
          name: "Address",
          type: 4,
          typeArguments: null,
        },
        {
          name: "ContractId",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 4,
      type: "struct Address",
      components: [
        {
          name: "value",
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: "struct ContractId",
      components: [
        {
          name: "value",
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 6,
      type: "struct OwnerChangedEvent",
      components: [
        {
          name: "owner",
          type: 3,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 7,
      type: "struct VaultFee",
      components: [
        {
          name: "start_time",
          type: 11,
          typeArguments: null,
        },
        {
          name: "start_fee",
          type: 10,
          typeArguments: null,
        },
        {
          name: "current_fee",
          type: 10,
          typeArguments: null,
        },
        {
          name: "change_rate",
          type: 10,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: "struct VaultFeeChangedEvent",
      components: [
        {
          name: "fee",
          type: 12,
          typeArguments: null,
        },
        {
          name: "change_rate",
          type: 12,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: "struct WithdrawalEvent",
      components: [
        {
          name: "recipient",
          type: 3,
          typeArguments: null,
        },
        {
          name: "token",
          type: 5,
          typeArguments: null,
        },
        {
          name: "amount",
          type: 12,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 10,
      type: "u16",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 11,
      type: "u32",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 12,
      type: "u64",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "pool_address",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "claim_fees",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: null,
    },
    {
      inputs: [],
      name: "get_fees",
      output: {
        name: "",
        type: 7,
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
      name: "owner",
      output: {
        name: "",
        type: 3,
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
          name: "start_fee",
          type: 10,
          typeArguments: null,
        },
        {
          name: "change_rate",
          type: 10,
          typeArguments: null,
        },
      ],
      name: "set_fees",
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
          name: "new_owner",
          type: 3,
          typeArguments: null,
        },
      ],
      name: "set_owner",
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
          type: 3,
          typeArguments: null,
        },
        {
          name: "token",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "withdraw",
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
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: "",
        type: 8,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: "",
        type: 6,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: "",
        type: 2,
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
  ],
  messagesTypes: [],
  configurables: [],
};

export class VaultContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): VaultContractAbiInterface {
    return new Interface(_abi) as unknown as VaultContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): VaultContractAbi {
    return new Contract(
      id,
      _abi,
      walletOrProvider
    ) as unknown as VaultContractAbi;
  }
}

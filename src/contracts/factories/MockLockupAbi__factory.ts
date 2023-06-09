/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { MockLockupAbi, MockLockupAbiInterface } from "../MockLockupAbi";
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
      type: "enum Identity",
      components: [
        {
          name: "Address",
          type: 3,
          typeArguments: null,
        },
        {
          name: "ContractId",
          type: 4,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
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
      typeId: 4,
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
      typeId: 5,
      type: "u64",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "user",
          type: 2,
          typeArguments: null,
        },
        {
          name: "amount",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "set_locked",
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
          name: "amount",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "calculate_boost",
      output: {
        name: "",
        type: 5,
        typeArguments: null,
      },
      attributes: null,
    },
    {
      inputs: [],
      name: "end_time",
      output: {
        name: "",
        type: 5,
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
          name: "user",
          type: 2,
          typeArguments: null,
        },
      ],
      name: "get_locked_balance",
      output: {
        name: "",
        type: 5,
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
      name: "get_total_locked",
      output: {
        name: "",
        type: 5,
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
      name: "token",
      output: {
        name: "",
        type: 4,
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
  loggedTypes: [],
  messagesTypes: [],
  configurables: [],
};

export class MockLockupAbi__factory {
  static readonly abi = _abi;
  static createInterface(): MockLockupAbiInterface {
    return new Interface(_abi) as unknown as MockLockupAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): MockLockupAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as MockLockupAbi;
  }
}

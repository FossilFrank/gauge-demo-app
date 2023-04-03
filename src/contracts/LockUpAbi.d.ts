/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from "fuels";

import type { Enum, Option } from "./common";

export type AddressInput = { value: string };

export type AddressOutput = { value: string };

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

export type IdentityInput = Enum<{
  Address: AddressInput;
  ContractId: ContractIdInput;
}>;

export type IdentityOutput = Enum<{
  Address: AddressOutput;
  ContractId: ContractIdOutput;
}>;

interface LockUpAbiInterface extends Interface {
  functions: {
    lock_up: FunctionFragment;
    withdraw: FunctionFragment;
    calculate_boost: FunctionFragment;
    end_time: FunctionFragment;
    get_locked_balance: FunctionFragment;
    get_total_locked: FunctionFragment;
    token: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "lock_up",
    values: [IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "calculate_boost",
    values: [BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "end_time",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_locked_balance",
    values: [IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_total_locked",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(functionFragment: "token", values?: undefined): Uint8Array;

  decodeFunctionData(
    functionFragment: "lock_up",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "withdraw",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "calculate_boost",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "end_time",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_locked_balance",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_total_locked",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(functionFragment: "token", data: BytesLike): DecodedValue;
}

export class LockUpAbi extends Contract {
  interface: LockUpAbiInterface;
  functions: {
    lock_up: InvokeFunction<[user: IdentityInput], void>;

    withdraw: InvokeFunction<[to_identity: IdentityInput], BN>;

    calculate_boost: InvokeFunction<[amount: BigNumberish], BN>;

    end_time: InvokeFunction<[], BN>;

    get_locked_balance: InvokeFunction<[user: IdentityInput], BN>;

    get_total_locked: InvokeFunction<[], BN>;

    token: InvokeFunction<[], ContractIdOutput>;
  };
}

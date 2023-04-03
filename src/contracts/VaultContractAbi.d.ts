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

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

export type VaultFeeInput = {
  start_time: BigNumberish;
  start_fee: BigNumberish;
  current_fee: BigNumberish;
  change_rate: BigNumberish;
};

export type VaultFeeOutput = {
  start_time: number;
  start_fee: number;
  current_fee: number;
  change_rate: number;
};

export type AddressInput = { value: string };

export type AddressOutput = { value: string };

export type IdentityInput = Enum<{
  Address: AddressInput;
  ContractId: ContractIdInput;
}>;

export type IdentityOutput = Enum<{
  Address: AddressOutput;
  ContractId: ContractIdOutput;
}>;

interface VaultContractAbiInterface extends Interface {
  functions: {
    claim_fees: FunctionFragment;
    get_fees: FunctionFragment;
    owner: FunctionFragment;
    set_fees: FunctionFragment;
    set_owner: FunctionFragment;
    withdraw: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim_fees",
    values: [ContractIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_fees",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(functionFragment: "owner", values?: undefined): Uint8Array;
  encodeFunctionData(
    functionFragment: "set_fees",
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "set_owner",
    values: [IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [IdentityInput, ContractIdInput]
  ): Uint8Array;

  decodeFunctionData(
    functionFragment: "claim_fees",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_fees",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(functionFragment: "owner", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "set_fees",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "set_owner",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "withdraw",
    data: BytesLike
  ): DecodedValue;
}

export class VaultContractAbi extends Contract {
  interface: VaultContractAbiInterface;
  functions: {
    claim_fees: InvokeFunction<[pool_address: ContractIdInput], void>;

    get_fees: InvokeFunction<[], VaultFeeOutput>;

    owner: InvokeFunction<[], IdentityOutput>;

    set_fees: InvokeFunction<
      [start_fee: BigNumberish, change_rate: BigNumberish],
      void
    >;

    set_owner: InvokeFunction<[new_owner: IdentityInput], void>;

    withdraw: InvokeFunction<
      [recipient: IdentityInput, token: ContractIdInput],
      BN
    >;
  };
}

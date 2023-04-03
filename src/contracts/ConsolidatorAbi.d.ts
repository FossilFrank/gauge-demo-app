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

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

interface ConsolidatorAbiInterface extends Interface {
  functions: {
    consolidate: FunctionFragment;
    registry: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "consolidate",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "registry",
    values?: undefined
  ): Uint8Array;

  decodeFunctionData(
    functionFragment: "consolidate",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "registry",
    data: BytesLike
  ): DecodedValue;
}

export class ConsolidatorAbi extends Contract {
  interface: ConsolidatorAbiInterface;
  functions: {
    consolidate: InvokeFunction<[], BN>;

    registry: InvokeFunction<[], ContractIdOutput>;
  };
}

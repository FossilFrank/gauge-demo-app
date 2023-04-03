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

export type IncentiveIdInput = { value: BigNumberish };

export type IncentiveIdOutput = { value: BN };

export type RewardAssetInput = {
  num_epochs: BigNumberish;
  tokens_per_unit: BigNumberish;
  start_epoch: BigNumberish;
};

export type RewardAssetOutput = {
  num_epochs: BN;
  tokens_per_unit: BN;
  start_epoch: BN;
};

export type AddressInput = { value: string };

export type AddressOutput = { value: string };

export type OptionalRewardAssetInput = Option<RewardAssetInput>;

export type OptionalRewardAssetOutput = Option<RewardAssetOutput>;

export type IdentityInput = Enum<{
  Address: AddressInput;
  ContractId: ContractIdInput;
}>;

export type IdentityOutput = Enum<{
  Address: AddressOutput;
  ContractId: ContractIdOutput;
}>;

interface IncentiveVaultContractAbiInterface extends Interface {
  functions: {
    add_reward_asset: FunctionFragment;
    create_staking_pool: FunctionFragment;
    distribute_incentives_to_pool: FunctionFragment;
    initialize: FunctionFragment;
    get_asset: FunctionFragment;
    get_pool_rewards_for_epoch: FunctionFragment;
    get_total_rewards_for_epoch: FunctionFragment;
    owner: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add_reward_asset",
    values: [BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "create_staking_pool",
    values: [ContractIdInput, ContractIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "distribute_incentives_to_pool",
    values: [IncentiveIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [ContractIdInput, ContractIdInput, ContractIdInput, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_asset",
    values: [ContractIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_pool_rewards_for_epoch",
    values: [IncentiveIdInput, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_total_rewards_for_epoch",
    values: [ContractIdInput, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(functionFragment: "owner", values?: undefined): Uint8Array;

  decodeFunctionData(
    functionFragment: "add_reward_asset",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "create_staking_pool",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "distribute_incentives_to_pool",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "initialize",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_asset",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_pool_rewards_for_epoch",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_total_rewards_for_epoch",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(functionFragment: "owner", data: BytesLike): DecodedValue;
}

export class IncentiveVaultContractAbi extends Contract {
  interface: IncentiveVaultContractAbiInterface;
  functions: {
    add_reward_asset: InvokeFunction<[num_epochs: BigNumberish], void>;

    create_staking_pool: InvokeFunction<
      [pool: ContractIdInput, reward_asset: ContractIdInput],
      IncentiveIdOutput
    >;

    distribute_incentives_to_pool: InvokeFunction<
      [incentive_id: IncentiveIdInput],
      void
    >;

    initialize: InvokeFunction<
      [
        gauges: ContractIdInput,
        registry: ContractIdInput,
        staking_rewards: ContractIdInput,
        epoch_duration: BigNumberish
      ],
      void
    >;

    get_asset: InvokeFunction<
      [asset: ContractIdInput],
      OptionalRewardAssetOutput
    >;

    get_pool_rewards_for_epoch: InvokeFunction<
      [incentive_id: IncentiveIdInput, epoch: BigNumberish],
      BN
    >;

    get_total_rewards_for_epoch: InvokeFunction<
      [asset: ContractIdInput, epoch: BigNumberish],
      BN
    >;

    owner: InvokeFunction<[], IdentityOutput>;
  };
}

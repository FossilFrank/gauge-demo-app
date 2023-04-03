/// <reference types="@fuel-wallet/sdk" />

import {
  Provider,
  Address,
  CoinQuantity,
  ContractFactory,
  NativeAssetId,
  WalletUnlocked,
  WalletLocked,
  BN
} from "fuels";
import { useState } from "react";
import crypto from "crypto";
import { RegistryContractAbi__factory } from "./contracts/factories/RegistryContractAbi__factory";
import { PoolContractAbi__factory } from "./contracts/factories/PoolContractAbi__factory";
import pool_storage_slots from "./pool_contract-storage_slots.json";

const REGISTRY_CONTRACT_ID =
  "0xf9d6853a1973c520e213025fba4b8ed947672f3b5ee660b976fb3ef706633084";
const VAULT_CONTRACT_ID =
  "0x741b7737daa59f83ba62f8258fea47b4cd8d2f1e287de93824177ed803e22942";

async function getBytecode() {
  const res = await fetch("/pool_contract.bin");
  const data = await res.arrayBuffer();
  return Buffer.from(data);
}

function ensure0x(str: string) {
  return str.indexOf("0x") === 0 ? str : `0x${str}`;
}

function getSlotByName(name: string) {
  const hash = crypto.createHash("sha256");
  hash.update(name);
  const sha256Hash = hash.digest("hex");
  return ensure0x(sha256Hash);
}

async function getProvider() {
  if (!window.fuel) {
    throw new Error("No Fuel");
  }
  await window.fuel.connect();
  const provider = await window.fuel.getProvider();
  return provider;
}

async function getWallet() {
  if (!window.fuel) {
    throw new Error("No Fuel");
  }
  const [account] = await window.fuel.accounts();
  // const wallet = await window.fuel.getWallet(account);
  const wallet = new WalletLocked(account, await window.fuel.getProvider());
  return wallet;
}

export default function LPList() {
  const [tokenState, setTokenState] = useState<{
    token0: string;
    token1: string;
    pool: string | null;
  }>({ token0: NativeAssetId, token1: NativeAssetId, pool: null });

  const getPool = async (token0: string, token1: string) => {
    const registry = RegistryContractAbi__factory.connect(
      REGISTRY_CONTRACT_ID,
      await getProvider()
    );
    const pool = await registry.functions
      .get_pool_contract({ value: token0 }, { value: token1 })
      .get();
    setTokenState((oldState) => {
      return oldState.token0 === token0 && oldState.token1 === token1
        ? { ...oldState, pool: pool.value || null }
        : oldState;
    });
  };

  const setTokens = (token0: string | null, token1: string | null) => {
    setTokenState((oldState) => {
      const newState = {
        token0: token0 || oldState.token0,
        token1: token1 || oldState.token1,
        pool: null
      };

      if (newState.token0.length === 66 && newState.token1.length === 66) {
        getPool(newState.token0, newState.token1);
      }

      return newState;
    });
  };

  const deploy = async () => {
    const provider = await getProvider();
    const wallet = await getWallet();

    const registry = RegistryContractAbi__factory.connect(
      REGISTRY_CONTRACT_ID,
      wallet
    );
    const bytecode = await getBytecode();
    const contractFactory = new ContractFactory(
      bytecode,
      PoolContractAbi__factory.abi,
      wallet
    );

    const token0Num = new BN(tokenState.token0);
    const token1Num = new BN(tokenState.token1);
    const [token0, token1] = token0Num.lt(token1Num)
      ? [tokenState.token0, tokenState.token1]
      : [tokenState.token1, tokenState.token0];

    const storageSlotsMap: { [key: string]: string } = {};
    for (const slot of pool_storage_slots) {
      storageSlotsMap[ensure0x(slot.key)] = ensure0x(slot.value);
    }
    storageSlotsMap[getSlotByName("storage_0_0")] = ensure0x(token0);
    storageSlotsMap[getSlotByName("storage_1_0")] = ensure0x(token1);

    const storageSlots = Object.entries(storageSlotsMap)
      .map(([key, value]) => ({
        key,
        value: value
      }))
      .filter(
        (item) =>
          item.value !==
          "0x0000000000000000000000000000000000000000000000000000000000000000"
      );

    console.log(storageSlots);
    const pool = await contractFactory.deployContract({
      gasLimit: 1_000_000,
      storageSlots: storageSlots
    });

    console.log("contract successful deployed", pool.id.toB256());

    const initialize = await pool.functions
      .initialize({ value: VAULT_CONTRACT_ID })
      .call();
    const register = await registry.functions
      .add_pool_contract({
        value: pool.id.toHexString()
      })
      .call();

    // const response = await registry.multiCall([initialize, register]).call();
    // console.log(response);
    // const addToRegistry = await registry.functions
    //   .add_exchange_contract(contract.id.toB256())
    //   .call();
    // console.log(addToRegistry.transactionResponse);
  };

  return (
    <div>
      <h1>LP Tokens</h1>

      <div style={{ border: "solid 1px gray", marginTop: 8, padding: 4 }}>
        Token 0: {}
        <input
          value={tokenState.token0}
          onChange={(e) => setTokens(e.target.value, null)}
          style={{ width: "500px" }}
        />
      </div>

      <div style={{ border: "solid 1px gray", marginTop: 8, padding: 4 }}>
        Token 1: {}
        <input
          value={tokenState.token1}
          onChange={(e) => setTokens(null, e.target.value)}
          style={{ width: "500px" }}
        />
      </div>

      <div>
        <button onClick={deploy} disabled={!!tokenState.pool}>
          Deploy
        </button>
      </div>
    </div>
  );
}

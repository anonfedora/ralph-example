/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
} from "@alephium/web3";
import { default as BurnALPHContractJson } from "../BurnALPH.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace BurnALPHTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<BurnALPHInstance, {}> {
  at(address: string): BurnALPHInstance {
    return new BurnALPHInstance(address);
  }

  tests = {
    burn: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { from: Address; amount: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "burn", params);
    },
  };
}

// Use this object to test and deploy the contract
export const BurnALPH = new Factory(
  Contract.fromJson(
    BurnALPHContractJson,
    "",
    "59308e31f3f450eee919ae338ed0d477a49eaa19eac964c32b35438714207fb7"
  )
);

// Use this class to interact with the blockchain
export class BurnALPHInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<BurnALPHTypes.State> {
    return fetchContractState(BurnALPH, this);
  }
}

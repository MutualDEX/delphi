/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ICurveFiSwapContract
  extends Truffle.Contract<ICurveFiSwapInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ICurveFiSwapInstance>;
}

type AllEvents = never;

export interface ICurveFiSwapInstance extends Truffle.ContractInstance {
  balances(
    i: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  A(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  fee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  coins(
    i: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    balances(
      i: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    A(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    fee(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    coins(
      i: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}

/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface Ierc721ReceiverContract
  extends Truffle.Contract<Ierc721ReceiverInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<Ierc721ReceiverInstance>;
}

type AllEvents = never;

export interface Ierc721ReceiverInstance extends Truffle.ContractInstance {
  /**
   * The ERC721 smart contract calls this function on the recipient after a {IERC721-safeTransferFrom}. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
   * Handle the receipt of an NFT
   * @param data Additional data with no specified format
   * @param from The address which previously owned the token
   * @param operator The address which called `safeTransferFrom` function
   * @param tokenId The NFT identifier which is being transferred
   * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
   */
  onERC721Received: {
    (
      operator: string,
      from: string,
      tokenId: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      operator: string,
      from: string,
      tokenId: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      operator: string,
      from: string,
      tokenId: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      operator: string,
      from: string,
      tokenId: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * The ERC721 smart contract calls this function on the recipient after a {IERC721-safeTransferFrom}. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.
     * Handle the receipt of an NFT
     * @param data Additional data with no specified format
     * @param from The address which previously owned the token
     * @param operator The address which called `safeTransferFrom` function
     * @param tokenId The NFT identifier which is being transferred
     * @returns bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
     */
    onERC721Received: {
      (
        operator: string,
        from: string,
        tokenId: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        operator: string,
        from: string,
        tokenId: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        operator: string,
        from: string,
        tokenId: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        operator: string,
        from: string,
        tokenId: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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

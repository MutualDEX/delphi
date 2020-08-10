/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface PoolContract extends Truffle.Contract<PoolInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<PoolInstance>;
}

export interface ModuleAdded {
  name: "ModuleAdded";
  args: {
    name: string;
    module: string;
    0: string;
    1: string;
  };
}

export interface ModuleRemoved {
  name: "ModuleRemoved";
  args: {
    name: string;
    module: string;
    0: string;
    1: string;
  };
}

export interface ModuleReplaced {
  name: "ModuleReplaced";
  args: {
    name: string;
    from: string;
    to: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

type AllEvents =
  | ModuleAdded
  | ModuleRemoved
  | ModuleReplaced
  | OwnershipTransferred;

export interface PoolInstance extends Truffle.ContractInstance {
  abiOf(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<string>;

  description(txDetails?: Truffle.TransactionDetails): Promise<string>;

  founder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns true if the caller is the current owner.
   */
  isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  is_constant(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setMetadata: {
    (
      _name: string,
      _description: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _name: string,
      _description: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _name: string,
      _description: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      _description: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Set new module for given name
   * @param _constant have a `true` value when you create permanent name of module
   * @param _module infrastructure node address
   * @param _name infrastructure node name
   */
  set: {
    (
      _name: string,
      _module: string,
      _constant: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _name: string,
      _module: string,
      _constant: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _name: string,
      _module: string,
      _constant: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      _module: string,
      _constant: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Remove module by name
   * @param _name module name
   */
  remove: {
    (_name: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_name: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _name: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Fast module exist check
   * @param _module is a module address
   * @returns `true` wnen core contains module
   */
  contains(
    _module: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Modules counter
   * @returns count of modules in core
   */
  size(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Check for module have permanent name
   * @param _name is a module name
   * @returns `true` when module have permanent name
   */
  isConstant(
    _name: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Get module by name
   * @param _name is module name
   * @returns module address
   */
  get(_name: string, txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Get module name by address
   * @param _module is a module address
   * @returns module name
   */
  getName(
    _module: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Get first module
   * @returns first address
   */
  first(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Get next module
   * @param _current is an current address
   * @returns next address
   */
  next(
    _current: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    abiOf(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    description(txDetails?: Truffle.TransactionDetails): Promise<string>;

    founder(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    is_constant(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setMetadata: {
      (
        _name: string,
        _description: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _name: string,
        _description: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _name: string,
        _description: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        _description: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Set new module for given name
     * @param _constant have a `true` value when you create permanent name of module
     * @param _module infrastructure node address
     * @param _name infrastructure node name
     */
    set: {
      (
        _name: string,
        _module: string,
        _constant: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _name: string,
        _module: string,
        _constant: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _name: string,
        _module: string,
        _constant: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        _module: string,
        _constant: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Remove module by name
     * @param _name module name
     */
    remove: {
      (_name: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _name: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _name: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Fast module exist check
     * @param _module is a module address
     * @returns `true` wnen core contains module
     */
    contains(
      _module: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Modules counter
     * @returns count of modules in core
     */
    size(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Check for module have permanent name
     * @param _name is a module name
     * @returns `true` when module have permanent name
     */
    isConstant(
      _name: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Get module by name
     * @param _name is module name
     * @returns module address
     */
    get(_name: string, txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Get module name by address
     * @param _module is a module address
     * @returns module name
     */
    getName(
      _module: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Get first module
     * @returns first address
     */
    first(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Get next module
     * @param _current is an current address
     * @returns next address
     */
    next(
      _current: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    "initialize()": {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Initializes the contract setting the deployer as the initial owner.
     */
    "initialize(address)": {
      (sender: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        sender: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        sender: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        sender: string,
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

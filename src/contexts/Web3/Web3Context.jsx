import { createContext } from "react";

const INIT = {
  web3: null,
  handleWeb3: null,
  handleAccount: null,
  handleChainId: null,
  handleToken: null,
};

export const Web3Context = createContext(INIT);

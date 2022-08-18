import Web3 from "web3";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Web3Context } from "./Web3Context";
import { Web3Reducer } from "./Web3Reducer";
import { WEB3_NETWORK, WEB3_NETWORKWAR } from "../../config";

const INIT = {
  account: "",
  network: new Web3(new Web3.providers.HttpProvider(WEB3_NETWORK)),
  networkWar: new Web3(new Web3.providers.HttpProvider(WEB3_NETWORKWAR)),
  wallet: null,
  provider: null,
  providerString: "",
  chainId: null,
  authToken: "",
  authTimeOut: "",
};

export const Web3Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Web3Reducer, INIT);

  const handleWeb3 = useCallback((provider, providerString) => {
    dispatch({
      type: "provider",
      payload: {
        web3: provider === null ? null : new Web3(provider),
        provider,
        providerString,
      },
    });
  }, []);

  const handleAccount = useCallback((account) => {
    dispatch({
      type: "account",
      payload: account,
    });
  }, []);

  const handleChainId = useCallback((chainId) => {
    dispatch({
      type: "chainId",
      payload: chainId,
    });
  }, []);

  const handleToken = useCallback((authToken, authTimeOut) => {
    dispatch({
      type: "token",
      payload: {
        authToken,
        authTimeOut,
      },
    });
  }, []);

  useEffect(() => {
    const getAccounts = async () => await state.wallet?.eth.getAccounts();
    if (state.wallet !== null) {
      getAccounts().then((accounts) => handleAccount(accounts[0]));
    }
  }, [state.wallet, handleAccount]);

  useEffect(() => {
    const getChainId = async () => await state.wallet?.eth.getChainId();
    if (state.wallet !== null) {
      getChainId().then((chainId) => {
        handleChainId(`0x${Number(chainId).toString(16)}`);
      });
    }
  }, [state.wallet, handleChainId]);

  const web3 = useMemo(() => state, [state]);
  return (
    <Web3Context.Provider
      value={{ web3, handleWeb3, handleAccount, handleChainId, handleToken }}
    >
      {children}
    </Web3Context.Provider>
  );
};

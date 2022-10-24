import { useEffect } from "react";
import { useEventsProvider } from "./useEventProvider";

export const useDrawer = ({ children }) => {
  const { accountsChanged, chainChanged } = useEventsProvider(
    handleAccount,
    handleChainId
  );

  useEffect(() => {
    web3Provider(handleWeb3, "metamask", false);
    getConnected().then(
      (response) =>
        response && handleWeb3(response.provider, response.providerString)
    );
  }, []);

  useEffect(() => {
    web3.provider?.on("accountsChanged", accountsChanged);
    return () =>
      web3.provider?.removeListener("accountsChanged", accountsChanged);
  }, [handleAccount, web3.provider, accountsChanged]);

  useEffect(() => {
    web3.provider?.on("chainChanged", chainChanged);
    return () => web3.provider?.removeListener("chainChanged", chainChanged);
  }, [handleChainId, web3.provider, chainChanged]);
  return { children };
};

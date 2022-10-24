import { useContext, useEffect } from "react";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { useEventsProvider } from "../../hook/useEventProvider";
import { getConnected, web3Provider } from "../../utils/web3";

export const DrawerContainer = ({ children }) => {
  const { web3, handleWeb3, handleAccount, handleChainId, handleToken } =
    useContext(Web3Context);

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
  return <>{children}</>;
};

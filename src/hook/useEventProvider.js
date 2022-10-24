import { useCallback } from "react";

export const useEventsProvider = (handleAccount, handleChainId) => {
  const accountsChanged = useCallback(
    (accounts) => handleAccount(accounts[0]),
    [handleAccount]
  );
  const chainChanged = useCallback(
    (chainId) => handleChainId(chainId),
    [handleChainId]
  );

  return {
    accountsChanged,
    chainChanged,
  };
};

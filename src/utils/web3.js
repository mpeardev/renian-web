import { providers, validateMetamask } from "./providers";

const web3Connect = async (handleWeb3, providerString, provider) => {
  try {
    if (providerString === "walletconnect") {
      provider.networkId = `0x${Number(1285).toString(16)}`;
      await provider.enable();
    }
    handleWeb3(provider, providerString);
  } catch (e) {
    console.error(e);
  }
};

export const web3Provider = (handleWeb3, providerString, message = true) => {
  const provider = providers(providerString);
  providerString === "metamask" && validateMetamask(provider, message);
  if (!provider.validate) {
    web3Connect(handleWeb3, providerString, provider);
  }
  return provider;
};

export const getConnected = async () => {
  try {
    if (typeof window.ethereum !== undefined) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        return {
          provider: window.ethereum,
          providerString: "metamask",
        };
      }
    }
    return false;
  } catch (err) {
    return false;
  }
};

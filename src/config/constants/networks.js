export const NETWORKS = {
  mainnet: {
    chainId: `0x${Number(1285).toString(16)}`,
    chainName: "Moonriver",
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.moonriver.moonbeam.network"],
    blockExplorerUrls: ["https://moonriver.moonscan.io/"],
    iconUrls: [
      "https://raw.githubusercontent.com/zenlinkpro/assets/master/blockchains/moonriver/assets/0x98878B06940aE243284CA214f92Bb71a2b032B8A/logo.png",
    ],
  },
  testnet: {
    chainId: `0x${Number(1287).toString(16)}`,
    chainName: "Moombeam Alpha",
    nativeCurrency: {
      name: "DEV",
      symbol: "DEV",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
    blockExplorerUrls: ["https://moonbase.moonscan.io"],
  },
};

export const WEB3_NETWORK_MAINNET =
  "https://moonriver.api.onfinality.io/rpc?apikey=4cc1072b-afe8-4d8d-b11b-53b298e6e6bc";
export const WEB3_NETWORK_TESTNET =
  "https://moonbeam-alpha.api.onfinality.io/rpc?apikey=4cc1072b-afe8-4d8d-b11b-53b298e6e6bc";

export const WEB3_NETWORKWAR_MAINNET =
  "https://moonriver.blastapi.io/f2852ea6-ff68-4a6b-a159-0c870b206601";

export const CHAIN_ID_MAINNET = `0x${Number(1285).toString(16)}`;
export const CHAIN_ID_TESTNET = `0x${Number(1287).toString(16)}`;

// export interface INativeCurrency {
// 	name: string;
// 	symbol: string;
// 	decimals: number;
// }
// export interface INetwork {
// 	chainId: string;
// 	chainName: string;
// 	nativeCurrency: INativeCurrency;
// 	rpcUrls: string[];
// 	blockExplorerUrls: string[];
// 	iconUrls: string[];
// }

// export interface INetworks {
// 	mainnet: INetwork;
// 	testnet: INetwork;
// }

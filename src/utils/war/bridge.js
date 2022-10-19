import { CONTRACTS_WAR } from "../../config/index";
import ABISPECIES from "../../config/abi/war/Bridge.json";

export const getSearch = async (web3, cod) => {
  try {
    const contract = new web3.eth.Contract(ABISPECIES, CONTRACTS_WAR.Bridge);
    const response = await contract.methods.getSearch(cod).call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getInfoStatus = async (web3, cod) => {
  try {
    const contract = new web3.eth.Contract(ABISPECIES, CONTRACTS_WAR.Bridge);
    const response = await contract.methods.getInfoStatus(cod).call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getSearchOwner = async (web3, contractBridge, address) => {
  try {
    const contract = new web3.eth.Contract(ABISPECIES, CONTRACTS_WAR.Bridge);
    const response = await contract.methods
      .getSearchOwner(contractBridge, address)
      .call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const setStatus = async (web3, account, cod, status) => {
  try {
    const contract = new web3.eth.Contract(ABISPECIES, CONTRACTS_WAR.Bridge);
    const response = await contract.methods
      .setStatus(cod, status)
      .send({ from: account });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const setVaccinesBlockchain = async (web3, account, cod, url) => {
  try {
    const contract = new web3.eth.Contract(ABISPECIES, CONTRACTS_WAR.Bridge);
    const response = await contract.methods
      .setVaccines(url, cod)
      .send({ from: account });
    return response;
  } catch (error) {
    console.log(error);
  }
};

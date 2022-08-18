import { CONTRACTS_WAR } from "../../config/index";
import ABIUSER from "../../config/abi/war/UsersSystem.json";
import { toChecksumAddress } from "./address";

export const Users = async (web3, account) => {
  try {
    const address = toChecksumAddress(web3, account);
    const contract = new web3.eth.Contract(ABIUSER, CONTRACTS_WAR.UsersSystem);
    const response = await contract.methods.Users(address).call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getErUsers = async (web3, account) => {
  try {
    const address = toChecksumAddress(web3, account);
    const contract = new web3.eth.Contract(ABIUSER, CONTRACTS_WAR.UsersSystem);
    const response = await contract.methods.getErUsers(address).call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getAccess = async (web3, account, module, value) => {
  try {
    const address = toChecksumAddress(web3, account);
    const contract = new web3.eth.Contract(ABIUSER, CONTRACTS_WAR.UsersSystem);
    const response = await contract.methods
      .getAccess(address, module, value)
      .call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getAccessAll = async (web3, account, access) => {
  try {
    const address = toChecksumAddress(web3, account);
    const contract = new web3.eth.Contract(ABIUSER, CONTRACTS_WAR.UsersSystem);
    const response = await contract.methods
      .getAccessAll(address, access)
      .call();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (web3, account, address) => {
  try {
    const accountChecksum = toChecksumAddress(web3, account);
    const contract = new web3.eth.Contract(ABIUSER, CONTRACTS_WAR.UsersSystem);
    const response = await contract.methods
      .deleteUser(toChecksumAddress(web3, address))
      .send({ from: accountChecksum, value: 0 });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const setUsers = async (
  web3,
  account,
  address,
  permission,
  data,
  access,
  accessValues
) => {
  try {
    const accountChecksum = toChecksumAddress(web3, account);
    const addressChecksum = toChecksumAddress(web3, address);
    const contract = new web3.eth.Contract(ABIUSER, CONTRACTS_WAR.UsersSystem);
    const response = await contract.methods
      .setUsers(addressChecksum, permission, data, access, accessValues)
      .send({ from: accountChecksum, value: 0 });
    return response;
  } catch (error) {
    console.log(error);
  }
};

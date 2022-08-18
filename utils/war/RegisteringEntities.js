import { CONTRACTS_WAR } from "../../config/index";
import ABIER from "../../config/abi/war/RegisteringEntities.json";
import { toChecksumAddress } from "./address";

export const getResponsibility = async (web3, address) => {
	address = toChecksumAddress(web3, address);
	try {
		const contract = new web3.eth.Contract(
			ABIER,
			CONTRACTS_WAR.RegisteringEntities
		);
		const response = await contract.methods.getResponsibility(address).call();
		return response;
	} catch (e) {
		console.log(e);
	}
};

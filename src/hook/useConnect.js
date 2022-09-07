import { useContext, useEffect, useState } from "react";
import { handleValidate } from "../utils/war/auth";
import { getConnected } from "../utils/web3";
import { Web3Context } from "../contexts/Web3/Web3Context";

export const useConnect = (init=false) => {
	const { web3, handleToken, handleWeb3 } = useContext(Web3Context);
	const [auth, setAuth] = useState(init);
	const [loading, setLoading] = useState(init);

	useEffect(() => {
		getConnected().then(
			(response) =>
				response && handleWeb3(response.provider, response.providerString)
		);
	}, []);

	useEffect(() => {
		if (web3.wallet !== null && web3.account) {
			handleToken(
				sessionStorage.getItem(
					"auth_token_" + String(web3.account).toUpperCase()
				),
				sessionStorage.getItem(
					"auth_timeOut_" + String(web3.account).toUpperCase()
				)
			);
		}
	}, [web3.wallet, web3.account]);

	useEffect(() => {
		handleValidate(web3.authToken, web3.authTimeOut, setAuth, setLoading);
	}, [web3.authToken]);

	return {
		auth,
		loading,
	};
};

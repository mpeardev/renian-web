import { API } from "../../config";

export const timeStamp = () => {
	return Math.floor(Date.now() / 1000);
};

export const handleUser = async (publicAddress) => {
	try {
		const content = await fetch(
			`${API.war}auth?publicAddress=${publicAddress}`
		);
		const response = await content.json();

		return response;
	} catch (error) {
		console.log(error);
	}
};

export const handleSignup = async (publicAddress, rol, rolNew, token) => {
	try {
		const response = await fetch(`${API.war}auth/new`, {
			body: JSON.stringify({ publicAddress, rol, rolNew }),
			headers: {
				"Content-Type": "application/json",
				"x-token": token,
			},
			method: "POST",
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const handleSignMessage = async (web3, publicAddress, nonce) => {
	try {
		const response = await web3.eth.personal.sign(
			web3.utils.utf8ToHex(`0x${nonce}`),
			publicAddress
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const handleAuthenticate = async (
	publicAddress,
	signature,
	handleToken
) => {
	try {
		const content = await fetch(`${API.war}auth/`, {
			body: JSON.stringify({ publicAddress, signature }),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});
		const response = await content.json();

		if (response?.token) {
			sessionStorage.setItem(
				"auth_token_" + String(publicAddress).toUpperCase(),
				response?.token
			);
			sessionStorage.setItem(
				"auth_timeOut_" + String(publicAddress).toUpperCase(),
				String(timeStamp() + 43200)
			);

			handleToken(response?.token, String(timeStamp() + 43200));
		}
	} catch (error) {
		console.log(error);
	}
};

export const handleValidate = (token, timeOut, setAuth, setLoading) => {
	if (token != "" && parseInt(timeOut ?? "0") > timeStamp()) {
		setAuth(true);
	} else {
		setAuth(false);
	}
	setLoading(true);
};

export const logout = async (web3, handleWeb3, handleToken, handleAccount) => {
	try {
		sessionStorage.removeItem(
			"auth_token_" + String(web3.account).toUpperCase()
		);
		sessionStorage.removeItem(
			"auth_timeOut_" + String(web3.account).toUpperCase()
		);

		if (web3.providerString === "walletconnect") {
			await web3.provider.disconnect();
		}
		handleWeb3(null, null);
		handleToken("", "");
		handleAccount("");
	} catch (error) {
		console.log(error);
	}
};

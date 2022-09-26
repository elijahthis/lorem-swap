import axios from "axios";

export const getNigerianBanks = async () => {
	try {
		const data = await axios({
			method: "get",
			url: "https://nigerianbanks.xyz/",
		});
		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getAccountName = async (accountNumber, bankCode) => {
	console.log(accountNumber);
	console.log(bankCode);
	try {
		console.log(
			`https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
		);
		const data = await axios({
			method: "get",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer sk_test_65c8a97e54dc8501c2b450faf8b7eb9810b85d85",
			},
			url: `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
		});
		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

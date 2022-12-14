import { useState, useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { MdDoneAll, MdError } from "react-icons/md";
import LoadingCircle from "../components/LoadingCircle";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "./styles.scss";
import Select from "react-select";
import { useQuery, gql } from "@apollo/client";
import { GET_EXCHANGE_RATE } from "../graphql/queries";
import { getNigerianBanks, getAccountName } from "../axios/bankStuff";
import useDebounce from "../hooks/useDebounce";

const Swapp = () => {
	const [copied, setCopied] = useState(false);
	const [asset, setAsset] = useState("BTC");
	const [rate, setRate] = useState(0);

	const [assetAmount, setAssetAmount] = useState("0");
	const [nairaAmount, setNairaAmount] = useState("0");
	const [bankDetails, setBankDetails] = useState({
		bankName: "",
		accountNumber: "",
		accountName: "",
	});

	const [bankList, setBankList] = useState([]);

	const { loading, error, data } = useQuery(GET_EXCHANGE_RATE, {
		variables: { currencyName: asset },
	});

	const cryptoOptions = [
		{
			value: "ADA",
			label: (
				<div className="cryptoOption">
					ADA{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/ada.png`}
					/>
				</div>
			),
		},
		{
			value: "AVAX",
			label: (
				<div className="cryptoOption">
					AVAX{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/avax.png`}
					/>
				</div>
			),
		},
		{
			value: "BNB",
			label: (
				<div className="cryptoOption">
					BNB{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png`}
					/>
				</div>
			),
		},
		{
			value: "BTC",
			label: (
				<div className="cryptoOption">
					BTC{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png`}
					/>
				</div>
			),
		},
		{
			value: "ETH",
			label: (
				<div className="cryptoOption">
					ETH{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png`}
					/>
				</div>
			),
		},
		{
			value: "FIL",
			label: (
				<div className="cryptoOption">
					FIL{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/fil.png`}
					/>
				</div>
			),
		},
		{
			value: "SOL",
			label: (
				<div className="cryptoOption">
					SOL{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png`}
					/>
				</div>
			),
		},
		{
			value: "USDT",
			label: (
				<div className="cryptoOption">
					USDT{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdt.png`}
					/>
				</div>
			),
		},
		{
			value: "USDC",
			label: (
				<div className="cryptoOption">
					USDC{" "}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdc.png`}
					/>
				</div>
			),
		},
	];
	const currencyOptions = [
		{
			value: "NGN",
			label: (
				<div className="cryptoOption">
					NGN <span style={{ color: "#008751" }}>???</span>
				</div>
			),
		},
	];

	const colourStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: "#2c2f36",
			color: "#ffffff",
		}),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isDisabled
					? undefined
					: isSelected
					? "black"
					: isFocused
					? "rgb(44, 47, 54)"
					: undefined,
				color: isDisabled
					? "#ffffff"
					: isSelected
					? "#ffffff"
					: "rgba(255,255,255,0.6)",
				fontWeight: isSelected ? 700 : 600,
				// cursor: isDisabled ? "not-allowed" : "default",

				":active": {
					...styles[":active"],
					backgroundColor: !isDisabled
						? isSelected
							? "red"
							: "green"
						: undefined,
				},
			};
		},
		// input: (styles) => ({ ...styles, ...dot() }),
		// placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
		singleValue: (styles, { data }) => ({
			...styles,
			color: "#ffffff",
			fontWeight: 700,
		}),
		menuList: (styles, { data }) => ({ ...styles, backgroundColor: "#191b1f" }),
		indicatorsContainer: (styles, { data }) => ({
			...styles,
			">div": {
				padding: "8px 4px",
			},
		}),
	};

	useEffect(() => {
		if (!loading && !error) {
			console.log(data);
			setRate(data?.getAggregatedRate);
		}
		if (error) console.log(error);
	}, [loading, asset]);

	useEffect(() => {
		console.log(rate);
		if (!isNaN(Number(assetAmount)))
			setNairaAmount((assetAmount * rate).toString());
	}, [rate]);

	const debouncedAccountNumber = useDebounce(bankDetails.accountNumber, 1000);

	const fetchigerianBanks = async () => {
		try {
			const res = await getNigerianBanks();
			console.log(
				res?.data?.map((bankObj) => ({
					value: bankObj?.code,
					label: bankObj?.name,
				}))
			);
			setBankList(
				res?.data?.map((bankObj) => ({
					value: bankObj?.code,
					label: bankObj?.name,
				}))
			);
		} catch (e) {
			console.log(e);
		}
	};

	const fetchAccountName = async () => {
		try {
			const res = await getAccountName(
				debouncedAccountNumber,
				bankDetails.bankName
			);
			console.log(res);
			setBankDetails({
				...bankDetails,
				accountName: res?.data?.data?.account_name,
			});
		} catch (e) {
			console.log(e);
			setBankDetails({
				...bankDetails,
				accountName: "",
			});
		}
	};

	useEffect(() => {
		fetchigerianBanks();
	}, []);

	useEffect(() => {
		if (debouncedAccountNumber.length > 5 && bankDetails.bankName)
			fetchAccountName();
		else {
			setBankDetails({
				...bankDetails,
				accountName: "",
			});
		}
	}, [debouncedAccountNumber]);

	return (
		<div className="Swapp">
			<h3>Withdraw directly to your bank account</h3>
			<div className="card">
				<h5>Withdraw</h5>
				<form
					action=""
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<section className="card-section" style={{ paddingTop: 0 }}>
						<div className="input-block">
							<TextField
								type="number"
								variant="number"
								className="transparent-num"
								value={assetAmount}
								onChange={(e) => {
									setAssetAmount(e.target.value);

									if (!isNaN(Number(e.target.value)))
										setNairaAmount((e.target.value * rate).toString());
								}}
							/>
							{/* <p>ETH</p> */}
							<Select
								options={cryptoOptions}
								styles={colourStyles}
								onChange={(e) => {
									console.log(e.value);
									setAsset(e.value);
								}}
								defaultValue={cryptoOptions[3]}
							/>
						</div>
						<div className="input-block">
							<TextField
								type="number"
								variant="number"
								className="transparent-num"
								value={nairaAmount}
								onChange={(e) => {
									setNairaAmount(e.target.value);

									if (!isNaN(Number(e.target.value)))
										setAssetAmount((e.target.value / rate).toString());
								}}
							/>
							<Select
								options={currencyOptions}
								styles={colourStyles}
								defaultValue={currencyOptions[0]}
							/>
						</div>
						<div className="best-price">
							{error ? (
								<MdError />
							) : loading ? (
								<LoadingCircle />
							) : (
								<BsFillCheckCircleFill />
							)}
							<p>
								{error
									? "Service unavailable at the moment"
									: loading
									? "Fetching live rates..."
									: `1 ${asset} = ${rate?.toLocaleString()} NGN`}
							</p>
						</div>
					</section>

					<section className="card-section card-section--badge">
						<p>Please send the exact amount of {asset} to this address</p>
						<div className="wallet">
							<span>0xdaf5b8D1c9c1dA131104A09534423982164F869B</span>
							{copied ? (
								<MdDoneAll color="#4bb543" />
							) : (
								<FiCopy
									onClick={() => {
										navigator.clipboard.writeText(
											"0xdaf5b8D1c9c1dA131104A09534423982164F869B"
										);
										setCopied(true);
										setTimeout(() => {
											setCopied(false);
										}, 1000);
									}}
								/>
							)}
						</div>
					</section>
					{/* <CustomSelect
						options={categories}
						labelIcon={true}
						defaultIcon="icon"
						placeholder="select"
						// default={defaultValue} // you can pass default object as selected.
						label="name" // default label is name, TODO: you can change as per your object fields.
						inputPlaceholder="search here"
						// onChange={() => this.handleOnChange} // handleOnChange get object.
						style={{}} // you can apply custom style
					/> */}

					<section className="card-section">
						<h4>Where should we send your funds?</h4>
						<div className="regular-input">
							<label htmlFor="">Bank Name</label>
							<Select
								options={bankList}
								styles={colourStyles}
								onChange={(e) =>
									setBankDetails({
										...bankDetails,
										bankName: e.value,
									})
								}
							/>
						</div>
						<div className="regular-input">
							<label htmlFor="">Account Number</label>
							<TextField
								type="number"
								variant="number"
								onChange={(e) =>
									setBankDetails({
										...bankDetails,
										accountNumber: e.target.value,
									})
								}
							/>
						</div>
						<div className="regular-input">
							<label htmlFor="">Account Name</label>
							<TextField
								type="text"
								variant="text"
								disabled={true}
								value={bankDetails.accountName}
							/>
						</div>
					</section>
					<Button variant="secondary">Withdraw</Button>
				</form>
			</div>
		</div>
	);
};

export default Swapp;

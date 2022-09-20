import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import LoadingCircle from "../components/LoadingCircle";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "./styles.scss";
import AntSelect from "../components/AntSelect";

const Swapp = () => {
	const [copied, setCopied] = useState(false);

	let categories = [
		{
			name: "programming",
			value: "programming",
			icon: "fas fa-file-code",
		},
		{
			name: "call",
			value: "call",
			icon: "fas fa-phone-volume",
		},
		{
			name: "video call",
			value: "video call",
			icon: "fas fa-video",
		},
		{
			name: "metting",
			value: "metting",
			icon: "fa fa-users",
		},
		{
			name: "database design",
			value: "database design",
			icon: "fa fa-database",
		},
		{
			name: "testing",
			value: "testing",
			icon: "fa fa-bug",
		},
	];

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
							/>
							<p>ETH</p>
						</div>
						<div className="input-block">
							<TextField
								type="number"
								variant="number"
								className="transparent-num"
							/>
							<p>NGN</p>
						</div>
						<div className="best-price">
							{/* <BsFillCheckCircleFill /> */}
							<LoadingCircle />
							<p>1 ETH = 668, 389.64 NGN</p>
						</div>
					</section>

					<section className="card-section card-section--badge">
						<p>Please send the exact amount of ETH to this address</p>
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
							<label htmlFor="">Account Number</label>
							<TextField type="number" variant="number" />
						</div>
						<div className="regular-input">
							<label htmlFor="">Account Name</label>
							<TextField type="text" variant="text" />
						</div>
						<div className="regular-input">
							<label htmlFor="">Bank Name</label>
							<TextField type="text" variant="text" />
						</div>
					</section>
					<Button variant="secondary">Withdraw</Button>
				</form>
			</div>
		</div>
	);
};

export default Swapp;

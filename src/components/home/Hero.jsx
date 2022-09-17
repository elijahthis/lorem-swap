import "./styles.scss";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
	const [current, setCurrent] = useState(0);
	const currencies = ["eth", "btc", "bnb", "ada", "sol", "avax", "fil", "usdt"];

	const changeInterval = setInterval(() => {
		setCurrent((current + 1) % currencies.length);
	}, 3000);

	return (
		<div className="Hero">
			<div className="main-text">
				<h1>Lorem Swap</h1>
				<p>Withdraw crypto directly to your bank account</p>
			</div>
			<div className="side-show">
				<div className="txt">
					{/* <p>Crypto</p> */}
					<img
						src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${currencies[current]}.png`}
						alt=""
					/>
					<BsArrowRight /> <p>₦aira.</p>
				</div>
				<div className="robo-robo"></div>
			</div>
		</div>
	);
};

export default Hero;

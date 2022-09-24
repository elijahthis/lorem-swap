import "./styles.scss";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

const Hero = () => {
	const [current, setCurrent] = useState(0);
	const currencies = ["eth", "btc", "bnb", "ada", "sol", "avax", "fil", "usdt"];

	const changeInterval = setInterval(() => {
		setCurrent((current + 1) % currencies.length);
	}, 3000);

	return (
		<div className="Hero">
			<div className="main-text">
				<Flip bottom>
					<h1>Lorem Swap</h1>
				</Flip>
				<Fade bottom delay={500}>
					<p>Withdraw crypto directly to your bank account</p>
				</Fade>
			</div>
			<Roll delay={1000}>
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
			</Roll>
		</div>
	);
};

export default Hero;

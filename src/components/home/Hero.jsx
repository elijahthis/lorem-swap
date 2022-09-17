import "./styles.scss";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => (
	<div className="Hero">
		<div className="main-text">
			<h1>Lorem Swap</h1>
			<p>Withdraw crypto directly to your bank account</p>
		</div>
		<div className="side-show">
			<div className="txt">
				<p>Crypto</p> <BsArrowRight /> <p>₦aira.</p>
			</div>
			<div className="robo-robo"></div>
		</div>
	</div>
);

export default Hero;

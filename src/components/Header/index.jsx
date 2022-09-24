import { FaWolfPackBattalion } from "react-icons/fa";
import Button from "../Button";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
	const navigate = useNavigate();
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 40) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		changeBackground();

		// adding the event when scroll change Logo
		window.addEventListener("scroll", changeBackground);
	}, [window.scrollY]);

	return (
		<header className={`Header ${navbar ? "Header--active" : ""}`}>
			<Link to="/">
				<FaWolfPackBattalion size={40} />
			</Link>
			{window.location.pathname === "/swapp" ? (
				<Button>Connect Wallet</Button>
			) : (
				<Button onClick={() => navigate("/swapp")}>Get Started</Button>
			)}
		</header>
	);
};

export default Header;

import { FaWolfPackBattalion } from "react-icons/fa";
import Button from "../Button";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    console.log(window.location.pathname);

    return (
        <header className="Header">
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

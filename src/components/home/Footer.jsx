import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import './styles.scss'

const Footer = () => (
    <footer className="Footer">
        <div className="Footer__txt">
            <div className="legal-links">
                <p>Disclaimer</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
            <div>Copyright © 2022 Lorem. All rights reserved.</div>
        </div>
        <div className="Footer__icons">
            <IoMdMail />
            <BsTwitter />
            <SiDiscord />
            <AiFillInstagram />
        </div>
    </footer>
);

export default Footer;

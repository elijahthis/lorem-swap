import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import LoadingCircle from "../components/LoadingCircle";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "./styles.scss";

const Swapp = () => (
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
                        <p>1 ETH = 668,389.64 NGN</p>
                    </div>
                </section>

                <section className="card-section card-section--badge">
                    <p>Please send the exact amount of ETH to this address</p>
                    <div className="wallet">
                        0xdaf5b8D1c9c1dA131104A09534423982164F869B
                        <FiCopy />
                    </div>
                </section>

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

export default Swapp;
import { Input } from "antd";
import { letterOnly, numberOnly } from "../../helpers";
import "./styles.scss";

const TextField = ({ type, variant = "text", className, ...rest }) => {
    switch (variant) {
        case "number":
            return (
                <input
                    className={`TextField ${className}`}
                    type="text"
                    name=""
                    id=""
                    onInput={(e) => {
                        if (type === "number")
                            e.currentTarget.value = e.currentTarget.value
                                .replace(/[^0-9.]/g, "")
                                .replace(/(\..*?)\..*/g, "$1");
                    }}
                    {...rest}
                />
            );
            break;

        default:
            return (
                <input
                    className={`TextField ${className}`}
                    type="text"
                    name=""
                    id=""
                    {...rest}
                />
            );
            break;
    }
};

export default TextField;

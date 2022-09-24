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
						if (
							e.currentTarget.value.includes(".") &&
							!new RegExp(/^[0-9]*[.]{0,1}[0-9]*$/).test(e.currentTarget.value)
						)
							e.currentTarget.value = e.currentTarget.value.replace(/[.]/, "");
					}}
					onKeyPress={(e) => {
						const charCode = e.charCode || e.which;
						const keyValue = String.fromCharCode(charCode);
						const isValid = new RegExp(/[0-9.]/g).test(keyValue);
						if (!isValid) {
							e.preventDefault();
							return;
						}
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

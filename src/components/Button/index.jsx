import "./styles.scss";

const Button = ({
    children,
    variant = "primary",
    loading = false,
    disabled = false,
    onClick = () => {},
    ...rest
}) => {
    return (
        <button
            className={`Button Button--${variant} ${
                disabled && "Button--disabled"
            }`}
            disabled={disabled}
            onClick={() => {
                if (!loading && !disabled) onClick();
            }}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;

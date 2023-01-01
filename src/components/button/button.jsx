import "./button.scss";

const BUTTON_TYPE_STYLES = {
  google: "google",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => (
  <button
    className={`${BUTTON_TYPE_STYLES[buttonType]} button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;

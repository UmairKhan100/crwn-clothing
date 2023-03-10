import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  SpinnerButton,
} from "./button.styles";

export const BUTTON_TYPE_STYLES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = "base") =>
  ({
    [BUTTON_TYPE_STYLES.base]: BaseButton,
    [BUTTON_TYPE_STYLES.google]: GoogleSignInButton,
    [BUTTON_TYPE_STYLES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, isLoading, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {isLoading ? <SpinnerButton /> : children}
    </CustomButton>
  );
};

export default Button;

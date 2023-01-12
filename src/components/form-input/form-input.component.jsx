import {
  FormInputContainer,
  InputField,
  InputLabel,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => (
  <FormInputContainer>
    <InputField {...otherProps} />
    <InputLabel
      className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
    >
      {label}
    </InputLabel>
  </FormInputContainer>
);

export default FormInput;

import { useState } from "react";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import Button, { BUTTON_TYPE_STYLES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase.util";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => await signInWithGooglePopup();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
      event.target.reset();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is not correct!");
          break;
        case "auth/user-not-found":
          alert("User does not exist!");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign In with your Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          autoComplete="new-password"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_STYLES.google}
            onClick={logGoogleUser}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

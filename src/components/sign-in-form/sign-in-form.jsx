import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import "./sign-in-form.scss";
import Button from "../button/button";
import FormInput from "../form-input/form-input";

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
    <div className="sign-in-container">
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

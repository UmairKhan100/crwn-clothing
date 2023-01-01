import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./sign-in.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import Button from "../../components/button/button";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDoc = await createUserDocumentFromAuth(user);
    console.log(userDoc);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

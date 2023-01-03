import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXfH-JRyiMHAmXirh-Spaqj4xOqPuJup0",
  authDomain: "crwn-clothing-db-937cd.firebaseapp.com",
  projectId: "crwn-clothing-db-937cd",
  storageBucket: "crwn-clothing-db-937cd.appspot.com",
  messagingSenderId: "812905201767",
  appId: "1:812905201767:web:7e1beffdbe5ae2626994c2",
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInUserWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

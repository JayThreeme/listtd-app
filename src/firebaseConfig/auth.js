import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Popup Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User info:", user);
    return user;
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error;
  }
};

// Redirect Sign-In
export const signInWithGoogleRedirect = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error during redirect sign-in:", error.message);
    throw error;
  }
};

// Get Redirect Result
export const getGoogleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      console.log("Redirect result:", result.user);
      return result.user;
    }
  } catch (error) {
    console.error("Error retrieving redirect result:", error.message);
    throw error;
  }
};

// Sign-Out
export const signOutUser = async () => {
  try {
    await auth.signOut();
    console.log("User signed out");
  } catch (error) {
    console.error("Error during sign-out:", error.message);
  }
};

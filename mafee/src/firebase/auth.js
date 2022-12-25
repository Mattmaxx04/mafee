import { app } from "./index.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import user from "../store/users.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      let newUser = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        email: result.user.email,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      user.value = {
        ...newUser,
      };
    })
    .catch((error) => {
      console.warn("error", error);
    });
}

function logout() {
  signOut(auth)
    .then(() => {
      user.value = null;
      localStorage.setItem("user", null);
    })
    .catch((error) => {
      console.warn("error", error);
    });
}

//Registro de Usuario con Mail y Pass

function register() {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

//login con mail y pass
function loginWithMail() {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export { loginWithGoogle, logout, register, loginWithMail };

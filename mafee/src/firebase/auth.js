import { app } from "./index.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser,} from "./users.js";
import user from "../store/user.js";
import { ref } from "vue";
import users from '../store/users.js'
import { addLocation } from "./location.js";
import { addCredit } from "./credit.js";

const userWithEmail = ref({})
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {      
      const userList = users
      const email = result.user.email 
      const userSome = userList.value.some(user => user.email === email )
      if (userSome === true){
      userWithEmail.value = userList.value.filter(user => user.email === result.user.email)
      console.log(userWithEmail);
      user.value = 
        userWithEmail;
      }else{
      let newUser = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        email: result.user.email,
        password:"******"
      };
      let newLocation ={
          email: result.user.email,    
          address: " ",
          state:" ", 
          city:  " ",         
          pc:" ", 
          phone:" ",
      }
      let newCredit ={
        email: result.user.email,    
        number: " ",
        code:" ", 
        date:  " ",         
        network:" ", 
        name:result.user.displayName,
    }
      localStorage.setItem("user", JSON.stringify(newUser));
      user.value = {
        ...newUser,
      };

      addLocation(newLocation)
      addUser(newUser)
      addCredit(newCredit)
    }
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

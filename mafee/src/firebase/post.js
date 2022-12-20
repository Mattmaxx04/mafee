import { app } from "./index.js";
import {
    getFirestore,
    collection,
    onSnapshot, 
    addDoc
  } from "firebase/firestore";

  const db = getFirestore(app);
  const postRef = collection(db, 'posts');

  const addPost= (post)=>{
    addDoc(postRef, post)
};

export { addPost }
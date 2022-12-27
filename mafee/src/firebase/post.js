import { app } from "./index.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import  posts  from "../store/post.js";

const db = getFirestore(app);
const postRef = collection(db, "posts");

const getPost = () => {
  onSnapshot(postRef, (querySnapshot) => {
    posts.value = [];
    querySnapshot.forEach((doc) => {
      const newPost = {
        id: doc.id,
        img: doc.data().img,
        month: doc.data().month,
        day: doc.data().day,
        title: doc.data().title,
        subtitle:doc.data().subtitle,
        text: doc.data().text,
        author: doc.data().author,
        topic: doc.data().topic,
        type:doc.data().type,
      };

      posts.value.push(newPost);
    });
  });
};

export { getPost };

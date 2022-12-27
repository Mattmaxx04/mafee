import { app } from "./index.js";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  getDoc,
  addDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
import comment from "../store/comments.js";

/*conexion a la base de firebase*/
const db = getFirestore(app);

/*beers.value = traerBeers()*/
const commentRef = collection(db, "comments");

const addComment = (comment) => {
  addDoc(collection(db, "comments"), comment);
};
const getComments = () => {
  onSnapshot(commentRef, (querySnapshot) => {
    comment.value = [];
    querySnapshot.forEach((doc) => {
      const newComment = {
        id: doc.id,
        date: doc.data().date,
        postid: doc.data().postid,
        body: doc.data().body,
        username: doc.data().username,
        photo: doc.data().photo,
      };

      comment.value.push(newComment);
      /*comment.value.sort((a,b)=>b.date - a.date)*/
    });
  });
};

export { getComments, addComment };

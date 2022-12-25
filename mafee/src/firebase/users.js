import { app } from './index.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
/*import { posts } from '../store/PostStore.js';*/


const db = getFirestore(app)
const postRef = collection(db, 'users')

const addUser = (user) => {
    addDoc(postRef, user)
}

const updateUser = (user) => {
    // para actualizar datos
}

export { addUser, updateUser }
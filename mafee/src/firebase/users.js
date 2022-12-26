import { app } from './index.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import users from '../store/users.js'
/*import { posts } from '../store/PostStore.js';*/

/*conexion a la base de firebase*/
const db = getFirestore(app);

/*beers.value = traerBeers()*/
const usersRef = collection(db, "users");

const getUsers = () => {
    onSnapshot(usersRef, (querySnapshot) => {
        users.value = [];
      querySnapshot.forEach((doc) => {        
        const user = {
          id: doc.id,          
          displayName: doc.data().displayName,
          email: doc.data().email,
          photoURL:  doc.data().photoURL,        
          password: doc.data().password,
        };
        users.value.push(user);
      });
    });
    }

const addUser = (user) => {
    addDoc(usersRef, user)
}

const updateUser = (user) => {
    // para actualizar datos
}

export { addUser, updateUser, getUsers }
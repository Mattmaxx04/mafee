import { app } from './index.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import cart from '../store/cart.js';
// import { posts } from '../store/PostStore.js';
// import user from '../store/profile.js';

const db = getFirestore(app)
const cartRef = collection(db, 'cart')



const getCart= ()=>{
    onSnapshot(cartRef, (querySnapshot) => {
      cart.value = [];
    
      querySnapshot.forEach((doc) => {
        const newCart ={
          id: doc.id,
          product: doc.data().product,
          userId: doc.data().userId,
          content: doc.data().content,
          image: doc.data().image,
          quantity: doc.data().quantity,
          date: doc.data().date
        }
        cart.value.push(newCart)
        cart.value.sort((a,b)=> b.date - a.date)
      });
      console.log(cart.value);
    });
    }

const addCart = (cart) => {
    addDoc(cartRef, cart)
}

const deleteCart = (cart) => {
    deleteDoc(cartRef, cart)
}

export { addCart, deleteCart, getCart }
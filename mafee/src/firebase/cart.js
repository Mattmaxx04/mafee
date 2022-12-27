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
          beerId: doc.data().beerId,
          date: doc.data().date,
          type: doc.data().type,
          userId: doc.data().userId,
          img: doc.data().img,
          quantity: doc.data().quantity,
          price: doc.data().price
        }
        cart.value.push(newCart)
        cart.value.sort((a,b)=> b.date - a.date)
      });
    });
    }

const addCart = (cart) => {
    addDoc(cartRef, cart)
}

const deleteCart = (cart) => {
    deleteDoc(cartRef, cart)
}

export { addCart, deleteCart, getCart }
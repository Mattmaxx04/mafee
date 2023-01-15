import { app } from "./index.js";
import {
    getFirestore,
    collection,
    onSnapshot, 
    addDoc
  } from "firebase/firestore";
import credits  from '../store/credit.js'


  const db = getFirestore(app);
  const creditRef = collection(db, 'credit');

  const addCredit= (credit)=>{
    addDoc(creditRef, credit)
};

const getCredit = () =>{
    onSnapshot(creditRef, (querySnapshot) => {
        credits.value = [];
      querySnapshot.forEach((doc) => {
        
        const credit = {
          id: doc.id,          
          email: doc.data().email,    
          number: doc.data().number,
          code:doc.data().code, 
          date:  doc.data().date,         
          network:doc.data().network, 
          name:doc.data().name,
        };
    
        credits.value.push(credit);

      });
    });
    }

    export {  getCredit, addCredit };
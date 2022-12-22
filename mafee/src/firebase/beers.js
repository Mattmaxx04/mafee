import { app } from "./index.js";
import { getFirestore, onSnapshot, collection, query, getDoc, addDoc, where, deleteDoc } from "firebase/firestore";
import {beers} from "../store/beers.js"
/*conexion a la base de firebase*/
const db = getFirestore(app);

/*beers.value = traerBeers()*/
const beersRef = collection(db, "beers");

const getBeers = () =>{
    onSnapshot(beersRef, (querySnapshot) => {
        beers.value = [];
      querySnapshot.forEach((doc) => {
        
        const beer = {
          id: doc.id,          
          type: doc.data().type,
          img: doc.data().img,          
        };
    
        beers.value.push(beer);
        beers.value.sort((a,b)=>b.date - a.date)
      });
    });
    }

    export {  getBeers };
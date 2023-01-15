import { app } from "./index.js";
import {
    getFirestore,
    collection,
    onSnapshot, 
    addDoc, setDoc
  } from "firebase/firestore";
import locations from '../store/location.js'

  const db = getFirestore(app);
  const locationRef = collection(db, 'location');

  const addLocation= (location)=>{
    addDoc(locationRef, location)
};

const updateLocation=(location)=>{
  setDoc(locationRef,location)
}

const getLocation = () =>{
    onSnapshot(locationRef, (querySnapshot) => {
        locations.value = [];
      querySnapshot.forEach((doc) => {
        
        const location = {
          id: doc.id,     
          email: doc.data().email,     
          address: doc.data().address,
          state: doc.data().state, 
          city:  doc.data().city,         
          pc:doc.data().pc, 
          phone:doc.data().phone,          
        };
    
        locations.value.push(location);
      });
    });
    }

    export {  getLocation, addLocation, updateLocation };

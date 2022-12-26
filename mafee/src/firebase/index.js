import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCT2SLJ2mz0K7I4lJdHVU6s3zpkGk0QUZw",
  authDomain: "mafee-363d5.firebaseapp.com",
  projectId: "mafee-363d5",
  storageBucket: "mafee-363d5.appspot.com",
  messagingSenderId: "317546187619",
  appId: "1:317546187619:web:155da66a260ee0168ae156",
  measurementId: "G-V2KSF4T18W"
};

const app = initializeApp(firebaseConfig);
/*const analytics = getAnalytics(app);
*/
export { app }
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZjCHuACFO2u8FFyXQxKV2wteP3dWfbbQ",
    authDomain: "crudtodolist.firebaseapp.com",
    projectId: "crudtodolist",
    storageBucket: "crudtodolist.appspot.com",
    messagingSenderId: "443306574457",
    appId: "1:443306574457:web:8f9bb70855f5c6c3c50aa8"
  };


//   Initialize the Firebase function as a parameter
  const app = initializeApp(firebaseConfig); 
//   Initialize the Fire Store function as a parameter
  const db = getFirestore(app);

  export { db };
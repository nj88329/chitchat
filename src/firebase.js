import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCB8riTuLo9v7xltNPi1juep4KUwFlEHQ8",
    authDomain: "chitchat-b0e01.firebaseapp.com",
    projectId: "chitchat-b0e01",
    storageBucket: "chitchat-b0e01.appspot.com",
    messagingSenderId: "758122183662",
    appId: "1:758122183662:web:b0765a11ca14a706ceacff"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {  auth, provider };
  export default db;
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD59D8ZsPrO7ARaGyLFQlCuD86hAneh0iU",
    authDomain: "linkedin-clone-02-a2b69.firebaseapp.com",
    projectId: "linkedin-clone-02-a2b69",
    storageBucket: "linkedin-clone-02-a2b69.appspot.com",
    messagingSenderId: "345532898850",
    appId: "1:345532898850:web:6e1d8ddabd88981ae3347b"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebaseApp.storage();

  export {auth, provider, db, storage};
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD3amsN8zrsyhpJzY3OeO4NyGfH34Q6LOw",
    authDomain: "crwn-db-35b18.firebaseapp.com",
    databaseURL: "https://crwn-db-35b18.firebaseio.com",
    projectId: "crwn-db-35b18",
    storageBucket: "crwn-db-35b18.appspot.com",
    messagingSenderId: "879264050464",
    appId: "1:879264050464:web:b73f45962dc200a50d7b45",
    measurementId: "G-XS5ZFSYDE7"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


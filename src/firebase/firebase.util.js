import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLEPW-kDLovtmkpcDXw9vBeDDFeUZzawA",
    authDomain: "react-hiking.firebaseapp.com",
    databaseURL: "https://react-hiking.firebaseio.com",
    projectId: "react-hiking",
    storageBucket: "react-hiking.appspot.com",
    messagingSenderId: "203291460422",
    appId: "1:203291460422:web:2067d33f1d6a4bbb8adb47",
    measurementId: "G-JMBLFQR4RX"
};
firebase.initializeApp(firebaseConfig);

export const convertCollectionsToMap = (collection) => {
    return collection.docs.map(doc => doc.data());
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

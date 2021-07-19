import firebase from 'firebase'

let firebaseconfig = {
    apiKey: "AIzaSyAMHE5bWsB-LzcGCGoRnQg63eB9XAZBri8",
    authDomain: "proyectoecommerce-82426.firebaseapp.com",
    projectId: "proyectoecommerce-82426",
    storageBucket: "proyectoecommerce-82426.appspot.com",
    messagingSenderId: "1005354519362",
    appId: "1:1005354519362:web:74b9b3a6d4dd95f74616db"
};

firebase.initializeApp(firebaseconfig)

export default firebase
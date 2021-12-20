// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeb4g-N3DzpXlHDNx6QUEx45kQbCinCeo",
  authDomain: "fir-auth-d10f4.firebaseapp.com",
  projectId: "fir-auth-d10f4",
  storageBucket: "fir-auth-d10f4.appspot.com",
  messagingSenderId: "50499651302",
  appId: "1:50499651302:web:7a8b296b704f2de1aa9d27"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};
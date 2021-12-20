
import firebase from 'firebase';
//from 1st may
var firebaseConfig = {
    apiKey: "AIzaSyBGKzVL4hgQDMxx5mOa9gkDGt_GpI69MqI",
    authDomain: "todolist-a4298.firebaseapp.com",
    databaseURL: "https://todolist-a4298-default-rtdb.firebaseio.com",
    projectId: "todolist-a4298",
    storageBucket: "todolist-a4298.appspot.com",
    messagingSenderId: "830328645877",
    appId: "1:830328645877:web:c4c7a19b26a8729ee3fdbc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
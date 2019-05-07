import firebase from 'firebase/app';
import 'firebase/auth';

// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyBpsBaYsRWYVWHPXuQOXpgzWG7V1NAQrcY",
  authDomain: "apiproject-c7a88.firebaseapp.com",
  databaseURL: "https://apiproject-c7a88.firebaseio.com",
  projectId: "apiproject-c7a88",
  storageBucket: "apiproject-c7a88.appspot.com",
  messagingSenderId: "107897676872",
  appId: "1:107897676872:web:8ea4d86aa165d41a"
};
export default firebase.initializeApp(config);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWqpDAM9UvDQ8a9XKcFyWwR5aPk9osZc",
  authDomain: "insta-reels-770c8.firebaseapp.com",
  projectId: "insta-reels-770c8",
  storageBucket: "insta-reels-770c8.appspot.com",
  messagingSenderId: "542976095760",
  appId: "1:542976095760:web:2f2158f580147073e1fc95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db};
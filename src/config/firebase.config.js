import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"
  
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCTCTRShn2EDmXbt4BSqestW4v8T_Ysh8",
  authDomain: "flawleashandbeauty.firebaseapp.com",
  databaseURL: "https://flawleashandbeauty.firebaseio.com",
  projectId: "flawleashandbeauty",
  storageBucket: "flawleashandbeauty.appspot.com",
  messagingSenderId: "930028769087",
  appId: "1:930028769087:web:1cd21e812380da94674d8a",
  measurementId: "G-E39QYSS92V",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.firestore()

export default firebase

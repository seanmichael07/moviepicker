import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEBNIfWgN_bdOK68YpS5AVK3XmN3M895g",
  authDomain: "moviepicker-46941.firebaseapp.com",
  projectId: "moviepicker-46941",
  storageBucket: "moviepicker-46941.appspot.com",
  messagingSenderId: "884016927571",
  appId: "1:884016927571:web:03c93087f82e7ccbb9c7a6",
  measurementId: "G-7PERRV5T97"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.firestore()

export default firebase

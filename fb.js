import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyCUadexYBzJ_ynF9GNidpfv7vxWkW-85IM",
  authDomain: "mock-test-7c6ca.firebaseapp.com",
  databaseURL: "https://mock-test-7c6ca.firebaseio.com",
  projectId: "mock-test-7c6ca",
  storageBucket: "mock-test-7c6ca.appspot.com",
  messagingSenderId: "514597386952",
  appId: "1:514597386952:web:d709e1e0927c2816c243fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  export default db;
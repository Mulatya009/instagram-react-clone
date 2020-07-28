import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9ZUnI_K8Vd5U-9zQA2-CaVOhDsETosvY",
  authDomain: "instagram-clone-react-29126.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-29126.firebaseio.com",
  projectId: "instagram-clone-react-29126",
  storageBucket: "instagram-clone-react-29126.appspot.com",
  messagingSenderId: "834715108454",
  appId: "1:834715108454:web:0596a9edda44a6852599a7",
  measurementId: "G-0RCP3N0T3H",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

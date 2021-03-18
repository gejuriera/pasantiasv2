import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDj7sjZbJmEqBP3YQQZNT9W22SEQnyHNg4",
    authDomain: "react-native-firebase-2bf0d.firebaseapp.com",
    projectId: "react-native-firebase-2bf0d",
    storageBucket: "react-native-firebase-2bf0d.appspot.com",
    messagingSenderId: "995358851671",
    appId: "1:995358851671:web:1e0f67eb92cd4487f89912"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default {
      firebase,
      db,
  };
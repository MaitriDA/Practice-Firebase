import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBpYXGTTiZztak3NPK6QAsXk9wxoXf-a2E",
    authDomain: "fir-101ab.firebaseapp.com",
    projectId: "fir-101ab",
    storageBucket: "fir-101ab.appspot.com",
    messagingSenderId: "976695458360",
    appId: "1:976695458360:web:7f682917af4afd144f44cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
      timestampsInSnapshots:true
  })

  export default firebase;
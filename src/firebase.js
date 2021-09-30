import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCbJNhcvKPqajnRFSv56gsOk3iSCGJOumc",
  authDomain: "lino-96948.firebaseapp.com",
  projectId: "lino-96948",
  storageBucket: "lino-96948.appspot.com",
  messagingSenderId: "1040683672076",
  appId: "1:1040683672076:web:e2916e7c28864f78d64429",
  measurementId: "G-8RE8ZB0YKR"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
export default database;
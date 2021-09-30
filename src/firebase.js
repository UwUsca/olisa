import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvAafk8j5Act5hhwjCoUHp4ZGIQZVmO6M",
  authDomain: "olisa-f443d.firebaseapp.com",
  databaseURL: "https://olisa-f443d-default-rtdb.firebaseio.com",
  projectId: "olisa-f443d",
  storageBucket: "olisa-f443d.appspot.com",
  messagingSenderId: "853898654799",
  appId: "1:853898654799:web:bcaf1e70a649ad78b4263a",
  measurementId: "G-771BKZ3H4K"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
export default database;
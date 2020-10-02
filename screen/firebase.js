import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwO59pwHrgahQnm0nxRTjqJAcdSzoF6-g",
  authDomain: "test-valent-5a595.firebaseapp.com",
  databaseURL: "https://test-valent-5a595.firebaseio.com",
  projectId: "test-valent-5a595",
  storageBucket: "test-valent-5a595.appspot.com",
  messagingSenderId: "1019559348167",
  appId: "1:1019559348167:web:4acee179ccecd471fdfbe2",
  measurementId: "G-2WPPNNCWPF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebase };
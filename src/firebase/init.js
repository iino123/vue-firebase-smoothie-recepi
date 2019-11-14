 import firebase from 'firebase'
 // eslint-disable-next-line no-unused-vars
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCqdWqWBpYSP4vt7ZT2XL33ZvfyxbT4QoU",
  authDomain: "smoothies-maker.firebaseapp.com",
  databaseURL: "https://smoothies-maker.firebaseio.com",
  projectId: "smoothies-maker",
  storageBucket: "smoothies-maker.appspot.com",
  messagingSenderId: "1032913027366",
  appId: "1:1032913027366:web:91d4dfbb72940e073941e7",
  measurementId: "G-697NEYZL6S"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
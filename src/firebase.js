// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
// import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBbJcFpMH5ZluHb8WxFahTW-4LPg6TdQBg",
//   authDomain: "hallothon-a5221.firebaseapp.com",
//   projectId: "hallothon-a5221",
//   storageBucket: "hallothon-a5221.appspot.com",
//   messagingSenderId: "922471925749",
//   appId: "1:922471925749:web:cd15d988228d5e766282bc",
//   measurementId: "G-YKDGCFM1M8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbJcFpMH5ZluHb8WxFahTW-4LPg6TdQBg",
    authDomain: "hallothon-a5221.firebaseapp.com",
    projectId: "hallothon-a5221",
    storageBucket: "hallothon-a5221.appspot.com",
    messagingSenderId: "922471925749",
    appId: "1:922471925749:web:cd15d988228d5e766282bc",
    measurementId: "G-YKDGCFM1M8"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();


export default db;
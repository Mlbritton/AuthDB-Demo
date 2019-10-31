var firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDk-kCTSgkAIYSdvfGzwzmqAvKXmT6WYNs",
    authDomain: "fir-bf848.firebaseapp.com",
    databaseURL: "https://fir-bf848.firebaseio.com",
    projectId: "fir-bf848",
    storageBucket: "fir-bf848.appspot.com",
    messagingSenderId: "259433970648",
    appId: "1:259433970648:web:790792f5d4321309fb90ad"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
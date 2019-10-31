import React, { Component } from 'react';
import '../firebaseConfig'
var firebase = require('firebase');
//var firebaseui = require('firebaseui');
var auth = firebase.auth();
//auth.signOut();

/*
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.disableAutoSignIn();
 
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
    // Other config options...
  });*/
  
const Home = () => (
    <div>
        Home<br></br>
        <div id='firebaseui-auth-container'></div>
    </div>
)
export default Home;
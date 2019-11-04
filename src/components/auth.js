import React, { useEffect, useState } from "react";
import fb from "../firebaseConfig";

/*
Demo Account
email : demo@gmail.com
pwd : demo2019
*/

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({email:'', uid:''});
  const [firebase, setFirebase] = useState(fb);

  useEffect(() => {
    //console.log(currentUser);
    //fb.auth().onAuthStateChanged(setCurrentUser);
    //fb.auth().onAuthStateChanged(()=>console.log('onAuthChange'));
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        console.log('onAuthChange : Logged in')
        console.log(user.email+':'+user.uid);
        setCurrentUser({email:user.email, uid:user.uid});
      }
      else{
        console.log('onAuthChange : Logged out')
        setCurrentUser({email:'', uid:''});
      }
     
      
    })
    //console.log('state change');
    //console.log(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, firebase}}>
      {children}
    </AuthContext.Provider>
  );
};
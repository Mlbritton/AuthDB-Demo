import React, {useContext} from 'react';
import { AuthContext } from './auth';


const LoginUI = () => {
    const {currentUser} = useContext(AuthContext);
    const {firebase} = useContext(AuthContext);
    var firebaseui = require('firebaseui');
    
    //var ui = new firebaseui;
    firebaseui.disableAutoSignIn();
    
    firebaseui.start('#firebaseui-auth-container', {
        signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
        // Other config options...
    });

    return ( 
        <div>
            Login FB UI<hr></hr>

            <div id="firebaseui-auth-container"></div>

        </div>
     );
}
 
export default LoginUI;
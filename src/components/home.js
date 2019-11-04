import React, { useContext } from 'react';
import { AuthContext } from './auth';
//auth.signOut();

const Home = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      Home<hr></hr>
      Current User : {currentUser.uid}
    </div>
  )
}
export default Home;
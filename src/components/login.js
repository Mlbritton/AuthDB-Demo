import React, { Component, useContext, useState, useEffect } from 'react';
import { AuthContext, AuthProvider } from './auth';


const Login = () => {

	//const [currentUser, setCurrentUser] = useState(null);
	const {currentUser} = useContext(AuthContext);
	const {firebase} = useContext(AuthContext);
	
	const [email, setEmail] = useState('demo@gmail.com');
	const [pwd, setPwd] = useState('demo2019');

	const onChangeEmail=(e)=>{
		setEmail(e.target.value);
	}
	const onChangePwd=(e)=>{
		setPwd(e.target.value);
	}

	const signIn=(e)=>{
		console.log(email);
		firebase.auth().signInWithEmailAndPassword(email, pwd)
			.then(function (result) {
				//alert(result);
				console.log(result);
			}).catch(function (error) {
				//alert(error);
				console.log(error.code+' : '+error.messag);
				console.log(error);
			});
		
		//console.log(pwd);
	}
	const signOut=(e) =>{
		firebase.auth().signOut();
	}
	return ( 
		<div>	Login using custom UI:<hr></hr>
				<section className="section">
					<label className="label">Name:</label>
					<input className="input" name="name" placeholder="Email" value={email} onChange={onChangeEmail} /><br></br>
					<label className="label">Pwd:</label>
					<input className="input" name="pwd" placeholder="password" value={pwd} onChange={onChangePwd}></input><br></br>

				</section>
				

				<section>
				<button onClick={signIn}>Sign In</button>
				<button onClick={signOut}>Sign Out</button>
				</section>

				<section className="section">
					Current Loggind in user : 
					{currentUser.email}
				</section>
			</div>
	 );
}
 
export default Login;

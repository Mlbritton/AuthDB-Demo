import React, { Component } from 'react';
import app from '../firebaseConfig'

// First we create our class
class Login extends React.Component {
	
	// Then we add our constructor which receives our props
	constructor(props) {
		super(props);
		// Next we establish our state
		this.state = {
			name: '',
			greeting: `Good ${this.props.time}, `
		}
		// To use the 'this' keyword, we need to bind it to our function
		this.onChange = this.onChange.bind(this);
	}
	
	// A custom function to change the name in our state to match the user input
	onChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	// The render function, where we actually tell the browser what it should show
	render() {
		return (
			<div>
				<section className="section">
					<label className="label">Name:</label>
					<input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange} />
					<input className="input" name="name" placeholder="Enter your name2..." onChange={this.onChange2} />
					<input className="input" name="pwd" placeholder="password"></input>
				</section>
				<section className="section">
					<p>{this.state.greeting} {this.state.name}</p>
				</section>

				<section>
					<button onClick={()=>app.auth().signOut()}>Sign Out</button>
				</section>
			</div>
		)
	}
}

export default Login;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'

const About = () => (
  <div>
    About
      </div>
)

/*const Login = () => (
  <div>
    Login
      </div>
)*/

const Contact = () => (
  <div>
    Contact
      </div>
)

const Info = () => (
  <div>
    info
      </div>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/info">
        <button>Info</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/info" component={Info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
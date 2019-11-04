import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import LoginUI from './components/loginUI'
import Info from './components/info'
import {AuthProvider} from './components/auth'
import PrivateRoute from './components/privateRoute'


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


const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login (My UI)</button>
      </Link>
      <Link to="/loginUI">
        <button>Login (FB UI)</button>
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
      <AuthProvider>
        <Router>
          <div className="App">
            <header className="App-header">
             
              <h1 className="App-title">Fibase Auth Demo</h1>
              <MainMenu />
            </header>
            <div>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/loginUI" component={LoginUI} />
              <Route exact path="/info" component={Info} />
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
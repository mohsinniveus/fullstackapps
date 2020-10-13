import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component";

function App() {

    function logout() {
        const token = localStorage.getItem('token');
      axios.request({
        method: 'post',
        url: 'https://qaone.remit.in/services/usr/logout',
        data: {
          "requestId": "3453",
          "requestType": "LOGOUT",
          "channelId": "WEB",
          "clientId": "RG",
          "groupId": "RG",
          "sessionId":"5RC0BY7ckyCV9JL0_xgg_HCkwMmUQUSsvzjYPzRk",
          "ipAddress": "127.0.0.1",
          "userId": "4022110112",
          "ulId": "928"
        },
        headers: {
            'Content-Type': 'application/json',
	          'Authorization' : `AuthToken ${token}`
        }
      })
      .then(response => {
        console.log(response);
        this.props.history.push('/');
      });
      }

    return(
        <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Niveus</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to={"/"} onClick={logout}>Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div></Router>
    );
}

export default App;
import React, { Component }  from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

    constructor(props) {
      super(props);

      this.logout = this.logout.bind(this);

    }

    componentDidMount() {
      axios.request({
        method: 'post',
        url: 'https://qaone.remit.in/services/usr/login',
        data: {
           "requestId": "3453",
           "requestType": "LOGIN",
           "channelId": "WEB",
           "clientId": "RG",
           "groupId": "RG",
           "sessionId":"5RC0BY7ckyCV9JL0_xgg_HCkwMmUQUSsvzjYPzRk",
           "ipAddress": "127.0.0.1",
           "loginId": "TEST1",
           "password": "password@3",
           "noofAttempts": "1",
           "custType":"SEND",
           "webName":"",
           "userAgent":"",
           "accept":"",
           "acceptLanguage":"",
           "acceptCharSet":"",
           "acceptEncoding":"",
           "connection":"",
           "host":"",
           "referer":""
        },
        headers: {
            'Content-Type': 'application/json',
        }
      })
      .then(response => {
        
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
      });
    }

    logout(){
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
      });
    }

    render() {

      return (
        <div>
          This POC component
          <button id="logout-btn" onClick={this.logout}>Log Out</button>
        </div>
      );
    }

}

export default App;

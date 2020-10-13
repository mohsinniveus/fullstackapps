import React, { Component } from "react";
import axios from 'axios';
import AuthService from "../services/auth.service";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        AuthService.login(this.state.username, this.state.password).then(function
            () {
                this.props.history.push('dashboard');
                window.location.reload();
            },
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                this.setState({
                  loading: false,
                  message: resMessage
                });
              }
        );
    
    }

    myChangeHandler = (event) => {
        event.preventDefault();
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
            this.props.history.push('dashboard');
          });
        
    }

    render() {
        return(
            <form onSubmit={this.handleLogin}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChangeUsername} placeholder="Enter User Name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChangePassword}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
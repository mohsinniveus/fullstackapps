import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password) {
        return axios.request({
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
}

export default new AuthService();
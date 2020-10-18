import React, { Component } from "react";
import axios from 'axios';

export default class Dashboard extends Component {
    
    componentDidMount() {
    
        const token = localStorage.getItem('token');
      axios.request({
        method: 'post',
        url: 'https://qaone.remit.in/services/txn/last-transactions',
        data: {
                 "requestId":"3453",
                 "requestType":"LASTTXNDTLS",
                 "channelId":"WEB",
                 "clientId":"RG",
                 "groupId":"RG",
                 "sessionId":"5RC0BY7ckyCV9JL0_xgg_HCkwMmUQUSsvzjYPzRk",
                 "ipAddress":"127.0.0.1",
                 "userId": "4022110112"
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
                <h3>React Dashboard Component</h3>
            </div>
        );
    }
}
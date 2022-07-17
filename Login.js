import React, { Component } from 'react';
import Header from './components/header';
import LoginPanel from './components/login_panel';
class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className="row justify-content-center">
                <Header/>
                <LoginPanel/>
            </div>
        );
    }
}
 
export default Login;
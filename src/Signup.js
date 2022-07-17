import React, { Component } from 'react';
import Header from './components/header';
import SignupPanel from './components/signup_panel';

class Signup extends Component {
    state = {  } 
    render() { 
        return (
            <div className="row justify-content-center">
                <Header/>
                <SignupPanel/>
            </div>
        );
    }
}
 
export default Signup;
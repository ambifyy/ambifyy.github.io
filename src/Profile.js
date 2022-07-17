import React, { Component } from 'react';
import Header from './components/header';

class Profile extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header/>
                <h3>This is the profile page - hi anish</h3>
            </div>
        );
    }
}
 
export default Profile;
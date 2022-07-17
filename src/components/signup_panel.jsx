import React, { Component } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

class SignupPanel extends Component {
    state = { } 

    render() { 
        return (
            <div className="fixed-top login col-3 shadow-lg bg-white p-5 rounded">
                <h1>Sign Up</h1>
                <div className="text-left">
                    <h3 className="my-3">Username</h3>
                    <input id="userId" className="inputs p-2 m-2 h3" type="text" />
                    <h3 className="my-3">Password</h3>
                    <input id="passwordId" className="inputs p-2 m-2 h3" type="password" />
                </div>
                <button onClick={this.sus} className="btn btn-primary text-white inputs my-3"><h3>Create Account</h3></button>
                
            </div>
        );
        
    }

    sus = () =>{
        const firebaseConfig = {databaseURL: "https://ambify-9d172-default-rtdb.firebaseio.com/", };
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        const db = getDatabase();
        set(ref(db, 'users/' + document.getElementById("userId").value), {
            password: document.getElementById("passwordId").value
        });
        setTimeout(() => {document.location.pathname = "/login";}, 500);
    }

    
    
}
 
export default SignupPanel;
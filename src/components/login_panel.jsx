import React, { Component } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

class LoginPanel extends Component {
    state = { }

    render() { 
        return (
            <div className="fixed-top login col-3 shadow-lg bg-white p-5 rounded">
                <h1>Log In</h1>
                <div className="text-left">
                    <h3 className="my-3">Username</h3>
                    <input id="userId" className="inputs p-2 m-2 h3" type="text" />
                    <h3 className="my-3">Password</h3>
                    <input id="passwordId" className="inputs p-2 m-2 h3" type="password" />
                </div>
                <button onClick={this.sus} className="btn btn-primary text-white inputs my-3"><h3>Sign In</h3></button>
                <h3 className="my-3"><a href="/signup">Don't Have An Account?</a></h3>
                
            </div>
        );
    }

    sus = () =>{
        const firebaseConfig = {databaseURL: "https://ambify-9d172-default-rtdb.firebaseio.com/", };
        const app = initializeApp(firebaseConfig);
        const dbRef = ref(getDatabase());
        
        let x = 'users/' + document.getElementById("userId").value;
        console.log(x); 
        get(child(dbRef, x)).then((snapshot) => {
            console.log("works");
        if (snapshot.exists()) {
            if(snapshot.val()["password"] == document.getElementById("passwordId").value){
                document.location.pathname = "/profile";
            }else{
                alert("The password is incorrect");
            }
        } else {
            alert("Please enter a valid username");
        }
        }).catch((error) => {
        console.error(error);
        });

    }
    
}
 
export default LoginPanel;
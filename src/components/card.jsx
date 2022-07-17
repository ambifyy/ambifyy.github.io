import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Ambience from '../Ambience';
import { useState } from 'react';
import App from '../App';
import {str} from '../App';

class Card extends Component{

    render() { 
        return (
            <div className="card m-3 mb-5 text-black bg-white shadow-lg">
                <img className="card-img-top" src={"images/" + this.props.bgPath} alt="Card image"></img>
                <div className="card-body text-left ">
                    <span className="card-title h3">{this.props.title}</span>
                    <span onClick={this.fullScreen} className="btn btn-primary p-4 m-2 float-right"></span>
                    <p className="card-text h5 m-1">{this.props.author}</p>
                </div>
            </div>
        );
    }

    fullScreen = () => {
        let x = "path: " + this.props.bgPath;
        console.log(x); 
        document.cookie = x; 
        document.location.pathname = "/ambience"; 
        document.documentElement.requestFullscreen();
    }
}
 
export default Card;
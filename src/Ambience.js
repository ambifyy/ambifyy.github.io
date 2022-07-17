import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component, Suspense } from 'react';
import {Link} from 'react-router-dom'
import SidePanel from './components/panel'
import Player from './components/player';
import { useEffect } from 'react';
import { useState } from 'react';
import Blur from 'react-blur';
import App from './App';
import {str} from './App';
import Header from './components/header';
import { render } from '@testing-library/react';

function Ambience() {
    const [source, setSource] = useState("");

    useEffect(() => {
        let path = "images/" + document.cookie.split("path: ")[1]; 
        // let path = "images/1.gif";
        setSource(path);
    })

    return (
        <div className="bgDiv">
            <Header/>
            <img className="image-bg shadow-lg" src={source}></img>
            {/* ?<Player img={source}/> */}
            {/* <div className="col-1 p-3 panel1 shadow-lg fixed-top"></div> */}
            <SidePanel/>
            
        </div>
    );    
    
}

var brightness = '100%'

function onPlay() {
    this.brightness = '100%';
}

function onPause() {
    brightness = '50%';
}


export default Ambience;



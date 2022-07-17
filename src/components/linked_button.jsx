import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class LinkedButton extends React.Component {
    state = {  }
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div >
                <a href={this.props.url}>
                    <button className={"btn btn-lg m-1 shadow-lg " + this.props.className}>{this.props.text}</button>
                </a>
            </div>
        );
    }

}

LinkedButton.defaultProps = {
    className:"",
    text:"button"
};

export default LinkedButton;
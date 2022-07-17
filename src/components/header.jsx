import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
    } 

    render() { 
        return (
            <div className="header1 sticky-top container-fluid py-4 bg-dark text-white text-left">
                <span className = "h2 m-5"><a className="text-white" href="/">Ambifjsjyy</a></span>
                <span className = "float-right mr-5"><a className="text-white" href="/login"><i className="material-symbols-outlined account">account_circle</i></a></span>
                {/*<p><Link to="/Ambience">Ambience</Link></p>*/}
            </div>
        );
    }

}
 
export default Header; 
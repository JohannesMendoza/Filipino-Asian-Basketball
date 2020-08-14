import React, { Component } from "react";
import App from "../App";
import './header.css';
import logo from './FABMainLogo.jpeg';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="header">
                    <img src={logo}></img>
                    <div class="nav-bar">
                        <button>Home</button>
                        <button>FABCares</button>
                        <button>FABSaturdays</button>
                        <button>FABSundays</button>
                        <button>FABApparel</button>
                        <div class="log-in">
                            <button>Log In</button>
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
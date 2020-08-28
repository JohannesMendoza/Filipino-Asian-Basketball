import React, { Component } from "react";
import App from "../App";
import './navbar.css';
import logo from './FABMainLogo.jpeg';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <React.Fragment>
            <div class="header">
                <img src={logo}></img>
                <div class="nav-bar">
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/scores"><button>Scores</button></Link>
                    <Link to="/"><button>Standings</button></Link>
                    <Link to="/"><button>Statistics</button></Link>
                    <Link to="/"><button>FABApparel</button></Link>
                    <Link to="/"><button>FABCares</button></Link>
                    <div class="log-in">
                        <Link to="/"><button>Log In</button></Link>
                        <Link to="/"><button>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;
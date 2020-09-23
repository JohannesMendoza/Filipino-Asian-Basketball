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
                    <Link to="/standings"><button>Standings</button></Link>
                    <Link to="/statistics"><button>Statistics</button></Link>
                    <Link to="/FABApparel"><button>FABApparel</button></Link>
                    <Link to="/fabCares"><button>FABCares</button></Link>
                    <div class="log-in">
                        <Link to="/logIn"><button>Log In</button></Link>
                        <Link to="/signUp"><button>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

/*class NavBar extends Component {
    state = {}
    render() {
        return (<div>
            <h1>THIS IS THE NAVBAR</h1>
        </div>);
    }
}*/
export default NavBar;
import React, { Component } from "react";
import App from "../App";
import './styles/navbar.css';
import logo from './FABMainLogo.jpeg';
import { Link } from "react-router-dom";
import Popup from '../images/popup.png';

/*const NavBar = () => {

    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((item) =>
        item.addEventListener("click", function () {
            this.classList.toggle("collapsible--expanded");
        })
    );

    return (
        <React.Fragment>
            <div class="nav-bar collapsible">
                <Link to="/"><img src={logo}></img></Link>
                <h7 className="name">Filipino Asian Basketball</h7>
                <img src={Popup} class="popup nav__toggler"></img>
                <ul class="nav-bar-buttons collapsible__content">
                    <li><Link to="/scores"><button>Scores</button></Link></li>
                    <li><Link to="/standings"><button>Standings</button></Link></li>
                    <li><Link to="/statistics"><button>Statistics</button></Link></li>
                    <li><Link to="/FABApparel"><button>FABApparel</button></Link></li>
                    <li><Link to="/fabCares"><button>FABCares</button></Link></li>
                    <li><Link to="/logIn"><button>Log In</button></Link></li>
                    <li><Link to="/signUp"><button>Sign Up</button></Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}*/

class NavBar extends Component {
    state = {};
    col = () => {
        console.log("lol");
        const collapsibles = document.querySelectorAll(".collapsible")
        collapsibles.forEach((item) =>
            item.classList.toggle("collapsible--expanded")
        );
    }
    render() {
        return (
            <React.Fragment>
                <div class="nav-bar collapsible">
                    <Link to="/"><img src={logo}></img></Link>
                    <h7 className="name">Filipino Asian Basketball</h7>
                    <button onClick={this.col}><img src={Popup} class="popup nav__toggler"></img></button>
                    <ul class="nav-bar-buttons collapsible__content">
                        <li><Link to="/scores"><button>Scores</button></Link></li>
                        <li><Link to="/standings"><button>Standings</button></Link></li>
                        <li><Link to="/teams"><button>Teams</button></Link></li>
                        <li><Link to="/FABApparel"><button>FABApparel</button></Link></li>
                        <li><Link to="/fabCares"><button>FABCares</button></Link></li>
                        <li><Link to="/logIn"><button>Log In</button></Link></li>
                        <li><Link to="/signUp"><button>Sign Up</button></Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}


export default NavBar;
import React, { Component } from 'react';
import './styles/score.css';
import App from "../App";
import gilasLogo from './gilasLogo.png';
import fastLogo from './fastLogo.png';

class Score extends Component {
    state = {
        awayScore: Math.floor(Math.random() * (77 - 50 + 1) + 50),
        homeScore: Math.floor(Math.random() * (77 - 50 + 1) + 50),
        awayName: "TEAM FAST",
        homeName: "TEAM GILAS"
    }
    render() {
        return (
            <div className="gameScore">
                {/*this.props.children*/}
                <div className="awayScoreContainer scoreContainer">
                    <img src={fastLogo} className="logo"></img>
                    <p className="teamName">{this.state.awayName}</p>
                    <h1 className="teamScore">{this.state.awayScore}</h1>
                </div>
                <div className="scoreDivider"><h1>-</h1></div>

                <div className="homeScoreContainer scoreContainer">
                    <img src={gilasLogo} className="logo"></img>
                    <p className="teamName">{this.state.homeName}</p>
                    <h1 className="teamScore">{this.state.homeScore}</h1>
                </div>
            </div>
        );
    }
}

/*const Score = () => {
    return (
        <div class="score">
            <h1>hello</h1>
        </div>
    );
}*/

export default Score;
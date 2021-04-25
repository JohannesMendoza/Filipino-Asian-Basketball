import React, { Component } from 'react';
import './styles/score.css';
import App from "../App";
import gilasLogo from './gilasLogo.png';
import fastLogo from './fastLogo.png';

class Score extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="gameScore">
                {/*this.props.children*/}
                <div className="awayScoreContainer scoreContainer">
                    <img src={this.props.awayIMG ? `${process.env.PUBLIC_URL}/TeamLogos/${this.props.awayIMG}.png` : `${process.env.PUBLIC_URL}/TeamLogos/blank.png`} className="logo"></img>
                    <p className="teamName">{this.props.awayName}</p>
                    <h1 className="teamScore">{this.props.awayScore}</h1>
                </div>
                <div className="scoreDivider"><h1>-</h1></div>

                <div className="homeScoreContainer scoreContainer">
                    <img src={this.props.homeIMG ? `${process.env.PUBLIC_URL}/TeamLogos/${this.props.homeIMG}.png` : `${process.env.PUBLIC_URL}/TeamLogos/blank.png`} className="logo"></img>
                    <p className="teamName">{this.props.homeName}</p>
                    <h1 className="teamScore">{this.props.homeScore}</h1>
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
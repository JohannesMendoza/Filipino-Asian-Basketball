import React, { Component } from "react";
import Link from "react-router-dom";
import './styles/standingsTeam.css';

class StandingsTeam extends Component {
    constructor(props) {
        super(props);
        this.props = {
            name: null,
            wins: null,
            losses: null,
            winRate: null,
            pathName: null,
        }
    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <tr className="standingsTeamEntry">
                    <th className="standingsTeamData standingsTeamName"><img className="standingsTeamIMG" src={this.props.pathName ? `${process.env.PUBLIC_URL}/TeamLogos/${this.props.pathName}.png` : `${process.env.PUBLIC_URL}/TeamLogos/blank.png`}></img>{this.props.name}</th>
                    <th className="standingsTeamData standingsTeamNumber">{this.props.wins}</th>
                    <th className="standingsTeamData standingsTeamNumber">{this.props.losses}</th>
                    <th className="standingsTeamData standingsTeamNumber">{this.props.winRate}</th>
                </tr>
            </React.Fragment>
        );
    }
}

export default StandingsTeam;
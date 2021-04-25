import React, { Component } from "react";
import Link from "react-router-dom";
import { withRouter } from 'react-router';
import StandingsTeam from './standingsTeam.jsx';
import './styles/standings.css'

class Standings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saturdayTeams: [],
            sundayTeams: []
        };
    }
    getStandings() {
        fetch(`/api/saturdayTeams`, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    saturdayTeams: data.map(team => ({
                        pathName: team.pathName,
                        name: team.team,
                        wins: team.wins,
                        losses: team.losses,
                        winRate: team.winRate
                    }))
                })
            })
        fetch(`/api/sundayTeams`, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    sundayTeams: data.map(team => ({
                        pathName: team.pathName,
                        name: team.team,
                        wins: team.wins,
                        losses: team.losses,
                        winRate: team.winRate
                    }))
                })
                console.log('res', data);
            })
    }
    componentWillMount() {
        this.getStandings();
    }
    render() {
        console.log('teams', this.state.sundayTeams);
        const satTeams = this.state.saturdayTeams.map(team => <StandingsTeam pathName={team.pathName} name={team.name} wins={team.wins} losses={team.losses} winRate={team.winRate} />)
        const sunTeams = this.state.sundayTeams.map(team => <StandingsTeam pathName={team.pathName} name={team.name} wins={team.wins} losses={team.losses} winRate={team.winRate} />)
        return (
            <div>
                <table className="standingsTable">
                    <h1 className="standingsHeader">FABSaturdays</h1>
                    <StandingsTeam name={"TEAM"} wins={"W"} losses={"L"} winRate={"WIN%"} />
                    {satTeams}
                    <h1 className="standingsHeader standingsDivider">FABSundays</h1>
                    <StandingsTeam name={"TEAM"} wins={"W"} losses={"L"} winRate={"WIN%"} />
                    {sunTeams}
                </table>
            </div>

        );
    }
}

export default Standings;
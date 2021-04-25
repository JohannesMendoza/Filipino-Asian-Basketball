//const { Component } = require("react");
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import Score from "./score";
import WeekDropdown from "./weekDropdown"

class Scores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sundayTeams: [],
            saturdayTeams: [],
            sundayGames: [],
            saturdayGames: [],
            sundayWeek: 2,
            saturdayWeek: 1
        }
    }
    getGames() {
        fetch(`/api/saturdayGames/${this.state.saturdayWeek}`, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
        })
            .then((res) => {
                //console.log('res', res);
                return res.json()
            })
            .then((data) => {
                this.setState({
                    saturdayGames: data.map(game => ({
                        team1: game.team1,
                        team2: game.team2,
                        s1: game.team1Score,
                        s2: game.team2Score,
                        week: game.week
                    }))
                })
            })
        fetch(`/api/sundayGames/${this.state.sundayWeek}`, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
        })
            .then((res) => {
                console.log('res', res);
                return res.json()
            })
            .then((data) => {
                this.setState({
                    sundayGames: data.map(game => ({
                        team1: game.team1,
                        team2: game.team2,
                        s1: game.team1Score,
                        s2: game.team2Score,
                        week: game.week
                    }))
                })
            })
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
                //console.log('res', data);
            })
    }
    componentWillMount() {
        this.getGames();
    }
    render() {
        if (this.state.sundayTeams.length === 0 || this.state.saturdayTeams.length === 0 || this.state.saturdayGames.length === 0 || this.state.sundayGames.length === 0) {
            console.log('not ready yet');
            return <div />
        }
        else {
            //console.log('lmao', this.state.sundayGames.map(game => this.state.sundayTeams.find(team => team.pathName === game.team2)))
            const satScores = this.state.saturdayGames.map(game => <Score awayIMG={game.team1} homeIMG={game.team2} awayScore={game.s1} homeScore={game.s2} awayName={this.state.saturdayTeams.find(team => team.pathName === game.team1).name} homeName={this.state.saturdayTeams.find(team => team.pathName === game.team2).name} />)
            const sunScores = this.state.sundayGames.map(game => <Score awayIMG={game.team1} homeIMG={game.team2} awayScore={game.s1} homeScore={game.s2} awayName={this.state.sundayTeams.find(team => team.pathName === game.team1).name} homeName={this.state.sundayTeams.find(team => team.pathName === game.team2).name} />)
            return (
                <React.Fragment>
                    <div>FABSaturdays<WeekDropdown /></div>
                    {satScores}
                    <div>FABSundays<WeekDropdown /></div>
                    {sunScores}
                </React.Fragment>
            );
        }
    }
}

export default Scores;
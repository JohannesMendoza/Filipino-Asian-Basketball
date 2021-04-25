import React, { Component } from 'react';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sundayTeams: [],
            saturdayTeams: []
        }
    }
    callTeamsAPI(request) {
        fetch(request, {
            method: 'GET',
            cache: "no-cache",
            credentials: "same-origin",
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    teams: data.map(team => ({
                        name: team.team,
                        logoPath: team.logoPath
                    }))
                })
            })
    }
    render() {
        return (
            <h1>This is the Teams page</h1>
        );
    }
}

export default Teams;
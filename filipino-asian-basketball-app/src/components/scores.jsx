//const { Component } = require("react");
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import Score from "./scores";

class Scores extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>This is the Scores Page</h1>
                <Link to="/standings">This will take you to standings</Link>
                <div>
                    <NavBar />
                    {/*<Score />*/}
                </div>
            </React.Fragment>
        );
    }
}

export default Scores;
//const { Component } = require("react");
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import Score from "./score";

class Scores extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>This is the Scores Component (Written as a class)</h1>
                <Score />
                <Score />
                <Score />
            </React.Fragment>
        );
    }
}

export default Scores;
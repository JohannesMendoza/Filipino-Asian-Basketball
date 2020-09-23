import React, { Component } from 'react';
import "./styles/signUp.css";
import TextInput from "./textInput";
class LogIn extends Component {
    state = {}
    render() {
        return (<React.Fragment>
            <h1 className="logInTitle formTitle">Log In</h1>
            <div className="form">
                <form className="signUpForm">
                    <TextInput hint="E-Mail Address" />
                    <TextInput hint="Password" pword="true" />
                    <button type={"submit"} className="submitButton">Log In</button>
                </form>
            </div>
        </React.Fragment>);
    }
}

export default LogIn;
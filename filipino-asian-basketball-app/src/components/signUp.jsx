import React, { Component } from 'react';
import "./styles/signUp.css"
import TextInput from './textInput';
class SignUp extends Component {
    state = {}
    render() {
        return (<React.Fragment>
            <h1 className="signUpTitle formTitle">Create an Account</h1>
            <div className="form">
                <form className="signUpForm">
                    <TextInput hint="First Name" />
                    <TextInput hint="Last Name" />
                    <TextInput hint="E-Mail Address" />
                    <TextInput hint="Password" pword="true" />
                    <TextInput hint="Confirm Password" pword="true" />
                    <button type={"submit"} className="submitButton">Submit</button>
                </form>
            </div>
        </React.Fragment>);
    }
}

export default SignUp;
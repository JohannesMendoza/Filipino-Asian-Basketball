import React, { Component } from 'react';
import "./styles/textInput.css"

class TextInput extends Component {
    state = {}
    render() {
        console.log('props', this.props);
        return (
            <div className="inputField">
                <p className="label">
                    {this.props.hint}
                </p>
                <input className="textBox" type={this.props.pword ? "password" : "text"} />
            </div>
        );
    }
}

export default TextInput;
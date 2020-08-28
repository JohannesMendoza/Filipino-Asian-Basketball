import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Scores from './components/scores';
import NavBar from './components/navbar';
import Home from "./components/home";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/scores" component={Scores} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;

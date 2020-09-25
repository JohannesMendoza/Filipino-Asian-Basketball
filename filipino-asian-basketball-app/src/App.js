import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Scores from './components/scores';
import Score from './components/score';
import NavBar from './components/navbar';
import Home from "./components/home";
import Standings from "./components/standings";
import Statistics from "./components/statistics";
import SignUp from "./components/signUp"
import LogIn from "./components/logIn"
import FABApparel from './components/fabApparel';
import ShopItem from './components/shopItem';

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
            <Route path="/" exact component={Home} />
            <Route name="Scores" path="/scores" component={Scores} />
            <Route path="/standings" component={Standings} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/FABApparel" component={FABApparel} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/logIn" component={LogIn} />
            <Route path="/shopItem" component={ShopItem} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;

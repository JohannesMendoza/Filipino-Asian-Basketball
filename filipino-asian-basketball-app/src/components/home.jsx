import React from "react";
import homePhoto from "../images/homePhoto.jpg";
import './styles/home.css'
import Score from "./score";
const Home = () => {
    return (
        <div>
            <div className="introPanelContainer">
                <div className="introPanel">
                    <img className="introPhoto" src={homePhoto} />
                    <div className="introMessage">
                        <h1 className="introTitle">WELCOME TO FAB!</h1>
                        <p className="introDescription">We are Filipino Asian Basketball Community Sports Program which
                        originated in Hayward, California that aim to unite the Filipino-Asian community through sportsmanship
                        and camaraderie and to inspire participants to promote healthy lifestyles by engaging in a safe
                        sporting environment which encourages fair play, social interaction, fitness development,
                        overall wellness and self confidence.</p>
                    </div>
                </div>
            </div>
            <Score />
            <Score />
        </div >
    );
}

export default Home;

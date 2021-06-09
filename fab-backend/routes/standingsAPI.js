const express = require("express");
const router = express.Router();
//port = require('../portHeader.js')
//res.header("Access-Control-Allow-Origin", "*");


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fab')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err => console.error('Could not connect to MongoDDB...', err)));

const standingsSchema = new mongoose.Schema({
    team: String,
    wins: Number,
    losses: Number,
    winRate: {
        type: Number,
        default: function () {
            return (this.wins / (this.wins + this.losses)).toFixed(3)
        }
    },
    pathname: String
});

const Standings = mongoose.model('Standings', standingsSchema);

async function createStandingsEntry(team, wins, losses, pathname) {
    const entry = new Standings({
        team: team,
        wins: wins,
        losses: losses,
        pathname: pathname
    });

    const result = await entry.save();
    console.log(result);
}

async function getStandings() {
    const standings = await Standings
        .find()
        .sort({ winRate: -1 });
    return standings;
}

router.get('/', (req, res) => {
    getStandings().then(standings => {
        res.send(standings);
    });
})

function createSeason14Standings() {
    createStandingsEntry('Bangarrakaza', 2, 5, 'bangarrakaza');
    createStandingsEntry('Mobbin', 5, 2, 'mobbin');
    createStandingsEntry('Bangengers', 5, 2, 'bangengers');
    createStandingsEntry('STS', 1, 6, 'sts');
    createStandingsEntry('Poggi Boyz', 4, 3, 'poggiboyz');
    createStandingsEntry('Stay Flexing', 4, 2, 'stayflexing');
}

//createSeason14Standings();

module.exports = router;
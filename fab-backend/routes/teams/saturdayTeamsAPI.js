const express = require("express");
const router = express.Router();
app = express();
app.use(express.json());
//res.header("Access-Control-Allow-Origin", "*");


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fab')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err => console.error('Could not connect to MongoDDB...', err)));

const teamsSchema = new mongoose.Schema({
    team: String,
    wins: Number,
    losses: Number,
    winRate: {
        type: Number,
        default: function () {
            return (this.wins / (this.wins + this.losses)).toFixed(3)
        }
    },
    pathName: String
});

const saturdayTeams = mongoose.model('SaturdayTeams', teamsSchema);

async function createSaturdayTeamsEntry(team, wins, losses, pName) {
    const entry = new saturdayTeams({
        team: team,
        wins: wins,
        losses: losses,
        pathName: pName
    });

    const result = await entry.save();
}

async function getTeams() {
    const teams = await saturdayTeams
        .find()
        .sort({ winRate: -1 });
    return teams;
}

router.get('/', (req, res) => {
    getTeams().then(teams => {
        res.send(teams);
    });
})


function createSaturdaySeason8Teams() {
    createSaturdayTeamsEntry('Humble', 4, 1, 'humble');
    createSaturdayTeamsEntry('Shootout', 0, 5, 'shootout');
    createSaturdayTeamsEntry('Crossover', 5, 0, 'crossover');
    createSaturdayTeamsEntry('Salbahe', 1, 4, 'salbahe');
    createSaturdayTeamsEntry('Up Tempo', 3, 2, 'uptempo');
    createSaturdayTeamsEntry('Aztecs', 1, 4, 'aztecs');
    createSaturdayTeamsEntry('Hustle & Provide', 3, 2, 'hustleandprovide');
    createSaturdayTeamsEntry('Flash', 3, 2, 'flash');
}

//createSaturdaySeason8Teams();

module.exports = router;
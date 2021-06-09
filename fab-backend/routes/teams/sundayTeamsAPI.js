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

const sundayTeams = mongoose.model('SundayTeams', teamsSchema);

async function createSundayTeamsEntry(team, wins, losses, pName) {
    const entry = new sundayTeams({
        team: team,
        wins: wins,
        losses: losses,
        pathName: pName
    });

    const result = await entry.save();
}

async function getTeams() {
    const teams = await sundayTeams
        .find()
        .sort({ winRate: -1 });
    return teams;
}

router.get('/', (req, res) => {
    getTeams().then(teams => {
        res.send(teams);
    });
})


function createSundaySeason14Teams() {
    createSundayTeamsEntry('Bangarrakaza', 2, 5, 'bangarrakaza');
    createSundayTeamsEntry('Mobbin', 5, 2, 'mobbin');
    createSundayTeamsEntry('Bangengers', 5, 2, 'bangengers');
    createSundayTeamsEntry('STS', 1, 6, 'sts');
    createSundayTeamsEntry('Poggi Boyz', 4, 3, 'poggiboyz');
    createSundayTeamsEntry('Stay Flexing', 4, 2, 'stayflexing');
}

//createSundaySeason14Teams();
//createSundayTeamsEntry('Bucket Boyz', 0, 1, 'bucketboyz');

module.exports = router;
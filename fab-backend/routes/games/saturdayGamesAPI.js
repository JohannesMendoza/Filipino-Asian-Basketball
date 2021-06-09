const express = require('express');
const router = express.Router();

app = express();
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fab')
    .then(() => console.log('Connecting to MongoDB for Saturday Games...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const gameSchema = new mongoose.Schema({
    week: Number,
    team1: String,
    team2: String,
    team1Score: Number,
    team2Score: Number,
});

const saturdayGames = mongoose.model('Saturdaygames', gameSchema)

async function createSaturdayGamesEntry(w, t1, t2, s1, s2) {
    const entry = new saturdayGames({
        week: w,
        team1: t1,
        team2: t2,
        team1Score: s1,
        team2Score: s2
    });

    const result = await entry.save();
}

async function getGames() {
    const games = await saturdayGames
        .find()
    return games;
}
async function getGamesFromWeek(week) {
    const games = await saturdayGames
        .find({
            week: week
        })
    return games;
}

router.get('/', (req, res) => {
    getGames().then(games => {
        res.send(games);
    });
})
router.get('/:week', (req, res) => {
    console.log('RECEIVED SATURDAY GAMES REQUEST FOR WEEK', req.params.week)
    getGamesFromWeek(req.params.week).then(games => {
        res.send(games);
    });
})
/*router.get('/:week', (req, res) => {
    getGames(req.params.week).then(games => {
        res.send(games);
    });
})*/

function createSeason8Games() {
    createSaturdayGamesEntry(1, 'stayhumble', 'shootout', 99, 87);
    createSaturdayGamesEntry(1, 'crossover', 'salbahe', 91, 67);
    createSaturdayGamesEntry(1, 'uptempo', 'aztecs', 68, 61);
    createSaturdayGamesEntry(1, 'hustleandprovide', 'flash', 73, 60);
    createSaturdayGamesEntry(2, 'flash', 'uptempo', 70, 62);
    createSaturdayGamesEntry(2, 'aztecs', 'salbahe', 86, 53);
    createSaturdayGamesEntry(2, 'crossover', 'shootout', 84, 79);
    createSaturdayGamesEntry(2, 'stayhumble', 'hustleandprovide', 73, 69);
    createSaturdayGamesEntry(3, 'uptempo', 'salbahe', 73, 66);
    createSaturdayGamesEntry(3, 'crossover', 'hustleandprovide', 73, 66);
    createSaturdayGamesEntry(3, 'flash', 'shootout', 115, 72);
    createSaturdayGamesEntry(3, 'stayhumble', 'aztecs', 74, 71);
    createSaturdayGamesEntry(4, 'uptempo', 'stayhumble', 88, 70);
    createSaturdayGamesEntry(4, 'hustleandprovide', 'aztecs', 71, 59);
    createSaturdayGamesEntry(4, 'crossover', 'flash', 67, 66);
    createSaturdayGamesEntry(4, 'salbahe', 'shootout', 72, 54);
    createSaturdayGamesEntry(5, 'flash', 'aztecs', 96, 70);
    createSaturdayGamesEntry(5, 'stayhumble', 'salbahe', 80, 72);
    createSaturdayGamesEntry(5, 'crossover', 'uptempo', 79, 68);
    createSaturdayGamesEntry(5, 'hustleandprovide', 'shootout', 98, 87);
}

//createSeason8Games();
module.exports = router;
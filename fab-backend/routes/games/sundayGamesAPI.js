const express = require("express");
const router = express.Router();
app = express();
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fab')
    .then(() => console.log('Connected to MongoDB for Sunday Games...'))
    .catch((err => console.error('Could not connect to MongoDDB...', err)));

const gameSchema = new mongoose.Schema({
    week: Number,
    team1: String,
    team2: String,
    team1Score: Number,
    team2Score: Number,
});

const sundayGames = mongoose.model('sundaygames', gameSchema)

async function createSundayGamesEntry(w, t1, t2, s1, s2) {
    const entry = new sundayGames({
        week: w,
        team1: t1,
        team2: t2,
        team1Score: s1,
        team2Score: s2
    });

    const result = await entry.save();
}

async function getGames() {
    const games = await sundayGames
        .find();
    return games
}
async function getGamesFromWeek(week) {
    const games = await sundayGames
        .find({
            week: week
        })
    return games;
}

router.get('/', (req, res) => {
    getGames().then(games => {
        res.send(games);
    })
})
router.get('/:week', (req, res) => {
    console.log('RECEIVED SUNDAY GAMES REQUEST FOR WEEK', req.params.week)
    getGamesFromWeek(req.params.week).then(games => {
        res.send(games);
    });
})

function createSeason14Games() {
    createSundayGamesEntry(1, 'bangengers', 'bucketboyz', 78, 71);
    createSundayGamesEntry(1, 'sts', 'bangarrakaza', 67, 66);
    createSundayGamesEntry(1, 'mobbin', 'poggiboyz', 61, 55);
    createSundayGamesEntry(2, 'stayflexing', 'bangarrakaza', 78, 71);
    createSundayGamesEntry(2, 'bangengers', 'mobbin', 75, 55);
    createSundayGamesEntry(2, 'poggiboyz', 'sts', 71, 65);
    createSundayGamesEntry(3, 'mobbin', 'bangarrakaza', 73, 62);
    createSundayGamesEntry(3, 'bangengers', 'sts', 103, 68);
    createSundayGamesEntry(3, 'stayflexing', 'poggiboyz', 65, 58);
    createSundayGamesEntry(4, 'bangengers', 'bangarrakaza', 75, 60);
    createSundayGamesEntry(4, 'mobbin', 'poggiboyz', 58, 55);
    createSundayGamesEntry(4, 'stayflexing', 'sts', 104, 75);
    createSundayGamesEntry(5, 'poggiboyz', 'bangarrakaza', 66, 61);
    createSundayGamesEntry(5, 'mobbin', 'sts', 86, 70);
    createSundayGamesEntry(5, 'stayflexing', 'bangengers', 69, 55);
    createSundayGamesEntry(6, 'poggiboyz', 'bangengers', 78, 75);
    createSundayGamesEntry(6, 'bangarrakaza', 'sts', 78, 68);
    createSundayGamesEntry(6, 'mobbin', 'stayflexing', 73, 70);
    createSundayGamesEntry(7, 'bangarrakaza', 'mobbin', 74, 66);
    createSundayGamesEntry(7, 'bangengers', 'sts', 119, 77);
    createSundayGamesEntry(7, 'poggiboyz', 'stayflexing', 63, 61);

    //playoffs
    createSundayGamesEntry(8, 'poggiboyz', 'bangarrakaza', 61, 53);
    createSundayGamesEntry(8, 'stayflexing', 'sts', 0, 0);

    //semi
    createSundayGamesEntry(9, 'stayflexing', 'mobbin', 0, 0);
    createSundayGamesEntry(9, 'poggiboyz', 'bangengers', 0, 0);

    //finals
    createSundayGamesEntry(10, 'poggiboyz', 'stayflexing', 61, 55);
    console.log('uploading Sunday games...');

}

//createSeason14Games();


module.exports = router;
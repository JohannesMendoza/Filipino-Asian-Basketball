const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
shopItemsAPI = require('./routes/shopItemsAPI.js');
app.use('/api/shopItems', shopItemsAPI);
standingsAPI = require('./routes/standingsAPI.js');
app.use('/api/standings', standingsAPI);

saturdayTeamsAPI = require('./routes/teams/saturdayTeamsAPI.js');
app.use('/api/saturdayTeams', saturdayTeamsAPI);
saturdayGamesAPI = require('./routes/games/saturdayGamesAPI.js');
app.use('/api/saturdayGames', saturdayGamesAPI);

sundayTeamsAPI = require('./routes/teams/sundayTeamsAPI.js');
app.use('/api/sundayTeams', sundayTeamsAPI);
sundayGamesAPI = require('./routes/games/sundayGamesAPI.js');
app.use('/api/sundayGames', sundayGamesAPI);
//port = require('./portHeader.js')
app.use(cors());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening on Port ${port}!!!`));

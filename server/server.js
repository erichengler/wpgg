const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Route includes
const gamesRouter = require('./routes/games.router');
const playingRouter = require('./routes/playing.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/games', gamesRouter);
app.use('/playing', playingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
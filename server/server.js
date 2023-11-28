const express = require('express');
require('dotenv').config();

const app = express();

// Route includes
const gamesRouter = require('./routes/games.router');

// Routes
app.use('/api/games', gamesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
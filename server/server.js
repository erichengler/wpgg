const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Route includes
const gamesRouter = require('./routes/games.router');

// Routes
app.use('/api/games', gamesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
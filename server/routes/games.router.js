const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', async (req, res) => {
    console.log(req.body);
    const { title, hours, notes, playing } = req.body;

    try {
        await pool.query(
            `INSERT INTO games (title, hours, notes, playing) 
            VALUES ($1, $2, $3, $4)`,
            [title, hours, notes, playing]
        );

        res.sendStatus(201);
    } catch (error) {
        console.log('Error adding game to database:', error);
        res.sendStatus(500);
    }
});

module.exports = router;
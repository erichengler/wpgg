const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM games`);
        res.json(result.rows);
    
    } catch (error) {
        console.log('Error fetching games:', error);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
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
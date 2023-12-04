const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.put('/:id', async (req, res) => {
    const newBool = req.body.newBool;
    const gameId = req.params.id;

    try {
        await pool.query(
            `UPDATE games SET playing = $1 WHERE id = $2`, [newBool, gameId]
        );
        res.sendStatus(200);

    } catch (error) {
        console.log('Error updating game notes:', error);
        res.sendStatus(500);
    }
});

module.exports = router;
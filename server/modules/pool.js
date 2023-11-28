const pg = require('pg');
let pool;

// For deployment
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

// For development with postgres on localhost
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'wpgg',
    });
}

module.exports = pool;
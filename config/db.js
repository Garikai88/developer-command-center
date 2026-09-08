const {Pool} = require('pg');

const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    SSL: {
        rejectUnauthorized: false
    }

});

pool.on("error", (err) => {
    console.error("Unexpected error on idle Postgres client", err);
});

module.exports = pool;
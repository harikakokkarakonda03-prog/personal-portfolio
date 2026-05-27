const { Pool } = require("pg");

const pool = new Pool({

    user: "postgres",

    host: "localhost",

    database: "portfolio",

    password: "Harika@1234",

    port: 5432

});

module.exports = pool;
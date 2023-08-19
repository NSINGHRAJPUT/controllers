const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-project',
    password: 'Nr@011297'
});

module.exports = pool.promise();
const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "1987",
    database: "usersdb"
}).promise();

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) connection.release();
});

module.exports = pool;




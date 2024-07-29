// THIS FILE CONNECT DB OK, BUT .ENV NOT OK
// app/_lib/db.js/
// how to console.log app/_lib/db.js/DB_HOST

// Install the library if you haven't already:
// npm install mysql2
require('dotenv').config();
console.log("db host", process.env.DB_HOST);
// console.log("p env", process.env);
const mysql = require('mysql2');

// Replace with your actual database credentials
const connection = mysql.createConnection({
    host: 'DB_HOST', 
    user: 'DB_USER',
    password: 'DB_PASSWORD', 
    database: 'DB_NAME',
    port: 'DB_PORT'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');

    // Example query
    // connection.query('SELECT * FROM your_table', (err, results) => {
    //     if (err) {
    //         console.error('Error executing query:', err);
    //         return;
    //     }
    //     console.log('Query results:', results);
    // });
});

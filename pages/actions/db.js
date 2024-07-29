// pages/actions/db.js
// in pages/actions/db.js, how to connect to mysql
// with host: 'DB_HOST', 
    // user: 'DB_USER',
    // password: 'DB_PASSWORD', 
    // database: 'DB_NAME',
    // port: 'DB_PORT'
    // use next js .env.local


// Import the 'mysql2' library
const mysql = require('mysql2');

export default async function call(){
    try {

        // Create a connection to the MySQL database
        const connection = await mysql.createConnection({
            // host: 'process.env.DB_HOST', 
            host: process.env.DB_HOST, 
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD, 
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });
        // Connect to the database
        
            console.log('Connected to database!');
        
            // Perform database operations here...
            // For example, a sample query:
            // connection.query('SELECT * FROM your_table', (err, results) => {
            //     if (err) {
            //         console.error('Error executing query:', err);
            //         return;
            //     }
            //     console.log('Query results:', results);
            // });
    } catch (error) {
    
        console.log(error);
        
        return error;
        
        }
}




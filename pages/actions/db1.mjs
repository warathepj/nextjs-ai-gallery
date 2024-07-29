// pages/actions/db1.js
// in pages/actions/db1.js create table 2 column, column head id and name
// with mock 2 row of data
// const mysql = require('mysql2');
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

async function initializeDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Create the table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `);

    // Insert mock data
    await connection.query(`
      INSERT INTO users (name) VALUES 
        ('John Doe'),
        ('Jane Smith')
    `);

    console.log('Database initialized successfully');
    connection.release();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Call the function to initialize the database
initializeDatabase();

export default pool;
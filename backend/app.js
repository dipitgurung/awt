const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// setup Express + SQlite 
const app = express();
const port = 3000;

// Create/connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// // Create a sample table
// db.run(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL UNIQUE
// )`);

// Middleware to parse JSON
app.use(express.json());

// Insert user (using prepared statement)
// app.post('/users', (req, res) => {
//     const { name, email } = req.body;
//     const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
//     stmt.run(name, email, function(err) {
//         if (err) {
//             res.status(400).json({ error: err.message });
//         } else {
//             res.json({ id: this.lastID, name, email });
//         }
//     });
//     stmt.finalize();
// });

// // Get all users
// app.get('/users', (req, res) => {
//     db.all('SELECT * FROM users', [], (err, rows) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//         } else {
//             res.json(rows);
//         }
//     });
// });
app.get('/',(req,res)=>{
    res.json({workings:"sth is fissy"})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

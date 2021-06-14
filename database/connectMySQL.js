const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
});

db.connect(err => {
    if (err) {
        console.log('Not Connected to MySQL');
        return;
    }
    console.log('MySQL Connected');
})

module.exports = db;
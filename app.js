const express = require('express');
const mysql = require('mysql');

const employesRoutes = require('./routes/employes');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'

});

db.connect(err => {
    if (err) {
        console.log('Not Connected');
        return;
    }
    console.log('MySQL Connected');
})


const app = express();

app.use('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {

        res.send('Database Created')
    })
});

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, firstname VARCHAR(200) NOT NULL, lastname VARCHAR(200) NOT NULL, email VARCHAR(200) NOT NULL, PRIMARY KEY(id));';
    db.query(sql, err => {
        if (err) {
            console.log('Table non crée', err)
        }

        res.send('Table Created')
    })
});

app.use('/api/employes', employesRoutes);


module.exports = app;
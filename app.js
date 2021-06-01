const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config()
const employesRoutes = require('./routes/employes');

const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/test', (req, res, next) => {
    console.log(req.body.nom);
    res.send(req.body.nom)
})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB

});

db.connect(err => {
    if (err) {
        console.log('Not Connected');
        return;
    }
    console.log('MySQL Connected');
})





app.use('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {

        res.send('Database Created')
    })
});

app.use('/createtable', (req, res) => {
    let sql = 'CREATE TABLE employes(id int AUTO_INCREMENT, firstname VARCHAR(50) NOT NULL, lastname VARCHAR(50) NOT NULL, email VARCHAR(200) NOT NULL, password VARCHAR(100) NOT NULL, image_url VARCHAR(200), PRIMARY KEY(id), UNIQUE(email));';
    db.query(sql, err => {
        if (err) {
            console.log('Table non crée', err)
        }
        res.send('Table Created')
    })
});



app.use('/api/employes', employesRoutes);


module.exports = app;
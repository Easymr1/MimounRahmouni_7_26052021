const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

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
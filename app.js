const express = require('express');
const mysql = require('mysql');



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

app.get('/employee1/:firstname/:lastname/:email', (req, res) => {
    let post = {
        firstname: req.params.firstname,
        lastname: req.params.lastname,
        email: req.params.email
    };
    let sql = 'INSERT INTO emplyee SET ?'
    db.query(sql, post, err => {
        if (err) {
            console.log('Probleme à la création de employee', err)
        }
        console.log(sql, post)

        res.send('Employee crée')
    })
});

app.get('/getemployee', (req, res) => {
    let sql = 'SELECT * FROM emplyee';
    db.query(sql, (err, results) => {
        if (err) {
            console.log('Recherche echouer', err)
        }
        console.log(sql, results)
        res.send('Fiche employer recuperer')
    })
})

app.get('/updateemployee/:id', (req, res) => {
    let newName = 'Lee';
    let sql = `UPDATE emplyee SET firstname = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            console.log('Modification echouer', err)
        }
        res.send('Modification réussi')
    })
});

app.get('/deleteemployee/:id', (req, res) => {
    let sql = `DELETE FROM emplyee WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            console.log('Employer non supprimer', err)
        }
        res.send('Employer supprimer avec succés');
    })
})


module.exports = app;
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
require('dotenv').config()

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


router.post('/signup', (req, res, next) => {
    console.log(req.body.email)
    let post = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
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


router.post('/login', (req, res) => {
    let sql = `SELECT * FROM emplyee WHERE id=${req.params.id}`;
    db.query(sql, (err, results) => {
        if (err) {
            console.log('Recherche echouer', err)
        }
        res.send(results)
    })
})

router.get('/update/:id', (req, res) => {
    let newName = 'Lee';
    let sql = `UPDATE emplyee SET firstname = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            console.log('Modification echouer', err)
        }
        res.send('Modification réussi')
    })
});

router.get('/delete/:id', (req, res) => {
    let sql = `DELETE FROM emplyee WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            console.log('Employer non supprimer', err)
        }
        res.send('Employer supprimer avec succés');
    })
})


module.exports = router;
const db = require('../connectMySQL')

exports.createdb = (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {

        res.send('Database Created')
    })
};

exports.createtable = (req, res) => {
    let sql = 'CREATE TABLE employes(id int AUTO_INCREMENT, firstname VARCHAR(50) NOT NULL, lastname VARCHAR(50) NOT NULL, email VARCHAR(200) NOT NULL, password VARCHAR(100) NOT NULL, image_url VARCHAR(200), PRIMARY KEY(id), UNIQUE(email));';
    db.query(sql, err => {
        if (err) {
            console.log('Table non crée', err)
        }
        res.send('Table Created')
    })
};
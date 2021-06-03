const db = require('../connectMySQL')

exports.createdb = (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {

        res.send('Database Created')
    })
};

exports.createtabl_employes = (req, res) => {
    let sql = 'CREATE TABLE employes(id int AUTO_INCREMENT, firstname VARCHAR(50) NOT NULL, lastname VARCHAR(50) NOT NULL, email VARCHAR(200) NOT NULL, password VARCHAR(100) NOT NULL, image_url VARCHAR(200), PRIMARY KEY(id), UNIQUE(email));';
    db.query(sql, err => {
        if (err) {
            console.log('Table employes non crée', err)
        }
        res.send('Table Employes Created')
    })
};

exports.createtable_publication = (req, res) => {
    let sql = 'CREATE TABLE publication(id int AUTO_INCREMENT, titre VARCHAR(100) NOT NULL, texte VARCHAR(500) NOT NULL, employeID int NOT NULL,date VARCHAR(50) NOT NULL, PRIMARY KEY(id));';
    db.query(sql, err => {
        if (err) {
            console.log('Table publication non crée', err)
        }
        res.send('Table Publication Created')
    })
};

exports.createtable_commentaire = (req, res) => {
    let sql = 'CREATE TABLE commentaire(id int AUTO_INCREMENT, texte VARCHAR(500) NOT NULL, employeID int NOT NULL, publicationID int NOT NULL, date VARCHAR(50) NOT NULL, PRIMARY KEY(id));';
    db.query(sql, err => {
        if (err) {
            console.log('Table commentaire non crée', err)
        }
        res.send('Table Commentaire Created')
    })
}
const db = require('../connectMySQL')

exports.createdb = (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {

        res.send('Database Created')
    })
};

exports.createtabl_employes = (req, res) => {
    let sql = 'CREATE TABLE employes(id int AUTO_INCREMENT, firstname VARCHAR(50) NOT NULL, lastname VARCHAR(50) NOT NULL, email VARCHAR(75) NOT NULL, password VARCHAR(256) NOT NULL, image_url VARCHAR(200), admin TINYINT(1) DEFAULT 0,  PRIMARY KEY(id), UNIQUE(email));';
    db.query(sql, err => {
        if (err) {
            console.log('Table employes non crée', err)
        }
        res.send('Table Employes Created')
    })
};

exports.createtable_publication = (req, res) => {
    let sql = 'CREATE TABLE publication(id int AUTO_INCREMENT, titre VARCHAR(100) NOT NULL, texte TEXT NOT NULL, employeID int NOT NULL,date DATETIME NOT NULL, CONSTRAINT fk_publication_emplyeID FOREIGN (employeID) REFERENCES employes(id) ON DELETE CASCADE, PRIMARY KEY(id));';
    db.query(sql, err => {
        if (err) {
            console.log('Table publication non crée', err)
        }
        res.send('Table Publication Created')
    })
};

exports.createtable_commentaire = (req, res) => {
    let sql = 'CREATE TABLE commentaire(id int AUTO_INCREMENT, texte TEXT NOT NULL, employeID int NOT NULL, publicationID int NOT NULL, date DATETIME NOT NULL, CONSTRAINT fk_commentaire_emplyeID FOREIGN (employeID) REFERENCES employes(id) ON DELETE CASCADE ,CONSTRAINT fk_commentaire_publicationID FOREIGN (publicationID) REFERENCES publication(id) ON DELETE CASCADE, PRIMARY KEY(id));';
    db.query(sql, err => {
        if (err) {
            console.log('Table commentaire non crée', err)
        }
        res.send('Table Commentaire Created')
    })
}
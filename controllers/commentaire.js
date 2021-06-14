let db = require('../database/connectMySQL')
const moment = require('moment');


exports.publierCommentaire = (req, res, next) => {

    let post = {
        texte: req.body.texte,
        employeID: req.body.employesID,
        publicationID: req.body.publicationID,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),

    };
    let sql = 'INSERT INTO commentaire SET ?'
    db.query(sql, post, err => {
        if (err) {
            throw res.status(401).json({ error: 'Commentaire non publier! ' });
        }
        res.status(201).json({ message: 'Commentaire publier! ' });
    })
};

exports.getCommentaire = (req, res, next) => {
    let sql = `SELECT commentaire.texte, commentaire.date, employes.firstname, employes.lastname, employes.image_url
    FROM commentaire
    INNER JOIN publication
    ON publication.id = commentaire.publicationID
    INNER JOIN employes
    ON employes.id = commentaire.employeID
    WHERE publication.id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if (err) {
            throw res.status(404).json({ error: 'Commentaire non recuperer! ' });
        }
        res.status(200).json({ message: 'Commentaire recuperer! ', results });
    })
}

exports.getCommentaires = (req, res, next) => {
    let sql = `SELECT * FROM commentaire `;
    db.query(sql, (err, results) => {
        if (err) {
            throw res.status(404).json({ error: 'Commentaire non recuperer! ' });
        }
        res.status(200).json({ message: 'Commentaire recuperer! ', results });
    })
}
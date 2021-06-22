let db = require('../database/connectMySQL')
const moment = require('moment');
const { now } = require('moment');


exports.publierCommentaire = (req, res, next) => {

    let post = {
        texte: req.body.texte,
        employeID: req.body.employeID,
        publicationID: req.body.publicationID,

    };
    let sql = 'INSERT INTO commentaire SET ? , date= NOW()'
    db.query(sql, post, (err, result) => {
        if (err) {
        res.status(401).json({ error: 'Commentaire non publier! ', err });
        return
       
        }
        res.status(201).json({ message: 'Commentaire publier! ', result });
    })
};

exports.getCommentairesPublication = (req, res, next) => {
    let sql = `SELECT commentaire.id, commentaire.texte, commentaire.date,commentaire.employeID, employes.firstname, employes.lastname, employes.image_url
    FROM commentaire
    INNER JOIN publication
    ON publication.id = commentaire.publicationID
    INNER JOIN employes
    ON employes.id = commentaire.employeID
    WHERE publication.id = ?`;
    let id = req.params.id;
    db.query(sql, id, (err, results) => {
        if (err) {
            res.status(404).json({ error: 'Commentaire non recuperer! ' });
        }
        res.status(200).json({ message: 'Commentaire recuperer! ', results });
    })
};

exports.updateCommentaire = (req, res, next) => {
    const update = {
        texte: req.body.texte,
    }
    console.log(req.body)
    const id = req.params.id;
    let sql = `UPDATE commentaire SET ?,date= NOW() WHERE id=${id}`;
    db.query(sql, update, (err, results) => {
        if (err) {
            res.status(400).json({ error: 'Commentaire non modifier! ', err });
            console.log(err)
            return;
        }
        res.status(200).json({ message: 'Commentaire modifier! ', results });
    })
};

exports.deleteCommentaire = (req, res, next) => {
    const sql = `DELETE FROM commentaire WHERE id=?`;
    const id = req.params.id;
    db.query(sql, id, (err, results) => {
        if(err) {
            res.status(400).json({ error: 'Commentaire non supprimer! ' });
        }
        res.status(201).json({ message: 'Commentaire supprimer! ', results });
    })
}
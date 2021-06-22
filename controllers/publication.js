let db = require('../database/connectMySQL')
const moment = require('moment');


exports.createPublication = (req, res, next) => {
    let post = {
        titre: req.body.titre,
        texte: req.body.texte,
        employeID: req.body.employeID,
    };
    let sql = 'INSERT INTO publication SET ?, date= NOW()'
    db.query(sql, post, (err, results) => {
        if (err) {
        res.status(401).json({ error: 'Publication non publier! ', err });
        return
        }
        res.status(201).json({results: results});
    })
};

exports.getAllPublications = (req, res, next) => {
    let sql = `SELECT publication.*, employes.firstname, employes.lastname, employes.image_url FROM publication INNER JOIN employes WHERE publication.employeID = employes.id ORDER BY id DESC`;
    db.query(sql, (err, results) => {
        if (err) {
        
        }
        res.status(200).json({ message: 'Publication recuperer! ', results });
    })
};

exports.updatePublications = (req, res, next) => {
    let update = {
        titre: req.body.titre,
        texte: req.body.texte, 
    }
    let id = req.params.id;

    let sql = `UPDATE publication SET ?,date= NOW() WHERE id=${id}`
    db.query(sql, update, (err, results) => {
        if (err) {
            res.status(401).json({ error: 'Publication non mise a jour! ', err });
        }
        res.status(201).json({ message: 'Modification réussi! ', results });
    })
}

exports.deletePublication = (req, res, next) => {
    let sql = `DELETE FROM publication WHERE id = ?`;
    let id = req.params.id;
    
    db.query(sql, id, (err, results) => {
        if (err) {
            res.status(400).json({ error: 'Publication non supprimer! ', err });
            console.log(err)
            return 
        };
        res.status(201).json({ message: 'Suppression réussi! ', results });
    })
};
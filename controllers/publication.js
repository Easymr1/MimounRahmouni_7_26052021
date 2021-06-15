let db = require('../database/connectMySQL')
const moment = require('moment');


exports.createPublication = (req, res, next) => {
    let post = {
        titre: req.body.titre,
        texte: req.body.texte,
        employeID: req.body.employesID,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),

    };
    let sql = 'INSERT INTO publication SET ?'
    db.query(sql, post, err => {
        if (err) {
        res.status(401).json({ error: 'Publication non publier! ', err });
        return
        }
        res.status(201).json({ message: 'Publication publier! ' });
    })
}

exports.getAllPublications = (req, res, next) => {
    let sql = `SELECT * FROM publication ORDER BY id DESC`;
    db.query(sql, (err, results) => {
        if (err) {
        
        }
        res.status(200).json({ message: 'Publication recuperer! ', results });
    })
}
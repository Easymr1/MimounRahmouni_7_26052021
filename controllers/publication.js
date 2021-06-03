let db = require('../database/connectMySQL')
const moment = require('moment');


exports.publication = (req, res, next) => {

    let post = {
        titre: req.body.titre,
        texte: req.body.texte,
        employeID: req.body.employesID,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),

    };
    let sql = 'INSERT INTO publication SET ?'
    db.query(sql, post, err => {
        if (err) {
            throw res.status(401).json({ error: 'Publication non publier! ' });
        }
        res.status(201).json({ message: 'Publication publier! ' });
    })
}
let db = require('../database/connectMySQL');
const fs = require('fs');

exports.createPublication = (req, res, next) => {
    let post = req.file ? {
        titre: req.body.titre,
        texte: req.body.texte,
        image: `${req.protocol}://${req.get('host')}/images/publication/${req.file.filename}`,
        employeID: req.body.employeID,
    } : {...req.body};

    
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
    let sql = `SELECT publication.*, employes.firstname, employes.lastname, employes.image_url FROM publication INNER JOIN employes WHERE publication.employeID = employes.id ORDER BY publication.date DESC`;
    db.query(sql, (err, results) => {
        if (err) {
        
        }
        res.status(200).json({ message: 'Publication recuperer! ', results });
    })
};

exports.updatePublications = (req, res, next) => {
    let update = req.file ? {
        titre: req.body.titre,
        texte: req.body.texte,
        image: `${req.protocol}://${req.get('host')}/images/publication/${req.file.filename}`,
    } : { ...req.body};

    let id = req.params.id;

    let sql = `UPDATE publication SET ?,date= NOW() WHERE id=${id}`
    db.query(sql, update, (err, results) => {
        if (err) {
            res.status(401).json({ error: 'Publication non mise a jour! ', err });
            return;
        }
        res.status(201).json({ message: 'Modification réussi! ', results });
    })
}

exports.deletePublication = (req, res, next) => {
    let sqlDeleteFile = `Select publication.image FROM publication WHERE id = ?`;
    let id = req.params.id;

    db.query(sqlDeleteFile, id, (err, results) => {
        if (err) {
           return res.status(400).json({ error: 'File non supprimer! ', err });

             
        };
        const filename = results[0].image.split('/images/publication/')[1];
        fs.unlink(`images/publication/${filename}`, () => {
        db.query(`DELETE FROM publication WHERE id = ?`, id, (err, results) => {
                if (err) {
                    return res.status(400).json({ error: 'Publication non supprimer! ', err });

                    
                };

                res.status(201).json({ message: 'Suppression réussi! ', results });
            })
        })
    })
    
    
};
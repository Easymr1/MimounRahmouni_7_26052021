let db = require('../database/connectMySQL')



exports.signup = (req, res, next) => {

    let post = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        image_url: req.body.image_url,
    };

    let sql = 'INSERT INTO employes SET ?'
    db.query(sql, post, err => {
        if (err) {
            throw res.status(401).json({ error: 'L\'utilisateur existe déja !' });
        }
        res.status(201).json({ message: 'Compte employés crée!' });
    })
};

exports.login = (req, res) => {
    let sql = `SELECT * FROM employes WHERE email='${req.body.email}'`;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(400).json({ error: 'Une erreur c\'est produit !' });
        }
        if (results == '') {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        res.send(results)
    })
}

exports.updateEmploye = (req, res) => {
    let newName = 'Lee';
    let sql = `UPDATE employes SET firstname = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            console.log('Modification echouer', err)
        }
        res.send('Modification réussi')
    })
}

exports.deleteEmploye = (req, res) => {
    let sql = `DELETE FROM employes WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            console.log('Employer non supprimer', err)
        }
        res.send('Employer supprimer avec succés');
    })
}

exports.profile = (req, res, next) => {
    let sql = `SELECT employes.firstname, employes.lastname, employes.image_url FROM employes WHERE id= ${req.body.id}`;
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(400).json({ error: 'Une erreur c\'est produit !' });
        }
        if (results == '') {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        res.send(results)
    })
}
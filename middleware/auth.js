const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const employesId = decodedToken.employesId;
        if (req.body.employesID && req.body.employesID != employesId) {
            console.log(employesId, 'Merci', req.body.employesID)
            res.status(401).json({ erreur: 'Requête échouer' })
        } else {
            console.log(employesId, 'Nope', req.body.employesID)
            res.status(200).json({ message: 'Requête réussi' })
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée' })
    }
}
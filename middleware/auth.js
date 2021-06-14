const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const employesId = decodedToken.employesId;
        if (req.body.employeID && req.body.employeID != employesId) {
            res.status(401).json({ erreur: 'Requête échouer' })
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée' })
        
    }
}
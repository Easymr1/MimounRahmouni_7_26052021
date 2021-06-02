const express = require('express');
const router = express.Router();


const commentaireCtrl = require('../controllers/commentaire');

router.use('/:id', commentaireCtrl.commentaire);

module.exports = router;
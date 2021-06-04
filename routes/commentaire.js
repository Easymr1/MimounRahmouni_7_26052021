const express = require('express');
const router = express.Router();


const commentaireCtrl = require('../controllers/commentaire');

router.use('/publier', commentaireCtrl.publierCommentaire);
router.use('/:id', commentaireCtrl.getCommentaire);

module.exports = router;
const express = require('express');
const router = express.Router();


const commentaireCtrl = require('../controllers/commentaire');

router.post('/', commentaireCtrl.publierCommentaire);
router.get('/:id', commentaireCtrl.getCommentairesPublication);
router.put('/:id', commentaireCtrl.updateCommentaire);
router.delete('/:id', commentaireCtrl.deleteCommentaire);

module.exports = router;
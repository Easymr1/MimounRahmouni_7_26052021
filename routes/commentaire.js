const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentaireCtrl = require('../controllers/commentaire');

router.post('/', auth, commentaireCtrl.publierCommentaire);
router.get('/:id', auth, commentaireCtrl.getCommentairesPublication);
router.put('/:id', auth, commentaireCtrl.updateCommentaire);
router.delete('/:id', auth, commentaireCtrl.deleteCommentaire);

module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config-publication')


const publicationCtrl = require('../controllers/publication');

router.post('/', auth, multer,  publicationCtrl.createPublication);
router.get('/', auth,   publicationCtrl.getAllPublications);
router.put('/:id', auth, multer,   publicationCtrl.updatePublications);
router.delete('/:id',auth, publicationCtrl.deletePublication);

module.exports = router;
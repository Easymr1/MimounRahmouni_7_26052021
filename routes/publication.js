const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config')


const publicationCtrl = require('../controllers/publication');

router.post('/',  multer,  publicationCtrl.createPublication);
router.get('/',  publicationCtrl.getAllPublications);
router.put('/:id', multer,   publicationCtrl.updatePublications);
router.delete('/:id',auth, publicationCtrl.deletePublication);

module.exports = router;
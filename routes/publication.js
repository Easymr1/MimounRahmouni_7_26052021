const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')


const publicationCtrl = require('../controllers/publication');

router.post('/', multer,  publicationCtrl.createPublication);
router.get('/',  publicationCtrl.getAllPublications);
router.put('/:id',   publicationCtrl.updatePublications);
router.delete('/:id',   publicationCtrl.deletePublication);

module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const publicationCtrl = require('../controllers/publication');

router.post('/',   publicationCtrl.createPublication);
router.get('/',  publicationCtrl.getAllPublications);
router.put('/:id',   publicationCtrl.updatePublications);
router.delete('/:id',   publicationCtrl.deletePublication);

module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const publicationCtrl = require('../controllers/publication');

router.post('/',  publicationCtrl.createPublication);
router.get('/',  publicationCtrl.getAllPublications);


module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const publicationCtrl = require('../controllers/publication');

router.use('/publier', auth, publicationCtrl.publication);

module.exports = router;
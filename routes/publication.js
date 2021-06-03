const express = require('express');
const router = express.Router();


const publicationCtrl = require('../controllers/publication');

router.use('/publier', publicationCtrl.publication);

module.exports = router;
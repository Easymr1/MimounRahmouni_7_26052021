const express = require('express');
const router = express.Router();


const publicationCtrl = require('../controllers/publication');

router.use('/:id', publicationCtrl.publication);

module.exports = router;
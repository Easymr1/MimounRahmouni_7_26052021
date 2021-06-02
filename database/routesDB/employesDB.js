const express = require('express');
const router = express.Router();


const userCtrl = require('../controllersDB/employesDB');

router.post('/createdb', userCtrl.createdb);
router.post('/createtable', userCtrl.createtable);

module.exports = router;
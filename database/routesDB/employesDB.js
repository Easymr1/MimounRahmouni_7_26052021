const express = require('express');
const router = express.Router();


const userCtrl = require('../controllersDB/employesDB');

router.post('/createdb', userCtrl.createdb);
router.post('/createtable_employes', userCtrl.createtabl_employes);
router.post('/createtable_publication', userCtrl.createtable_publication);

module.exports = router;
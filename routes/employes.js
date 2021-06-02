const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/employés');


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', userCtrl.updateEmploye);
router.delete('/:id', userCtrl.deleteEmploye);


module.exports = router;
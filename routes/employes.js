const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/employes');


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', userCtrl.updateEmploye);
router.delete('/:id', userCtrl.deleteEmploye);
router.get('/profile', userCtrl.profile);


module.exports = router;
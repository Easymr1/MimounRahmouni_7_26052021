const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config-profile')

const userCtrl = require('../controllers/employes');


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', multer, userCtrl.updateEmploye);
router.delete('/:id', userCtrl.deleteEmploye);
router.get('/:id', userCtrl.profile);


module.exports = router;
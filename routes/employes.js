const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config-profile');
const limiter = require('../middleware/limiter');
const limiterAccount = require('../middleware/limiterAccount');

const userCtrl = require('../controllers/employes');


router.post('/signup', limiterAccount, userCtrl.signup);
router.post('/login', limiter, userCtrl.login);
router.put('/:id', multer, userCtrl.updateEmploye);
router.delete('/:id', userCtrl.deleteEmploye);
router.get('/:id', userCtrl.profile);


module.exports = router;
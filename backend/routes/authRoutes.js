const express = require('express');
const router = express.Router();
const { authUser, authVendor, authAdmin, registerUser, registerVendor } = require('../controllers/authController');

router.post('/login/user', authUser);
router.post('/login/vendor', authVendor);
router.post('/login/admin', authAdmin);
router.post('/register/user', registerUser);
router.post('/register/vendor', registerVendor);

module.exports = router;

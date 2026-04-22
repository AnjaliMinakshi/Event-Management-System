const express = require('express');
const router = express.Router();
const { getUsers, deleteUser, getVendors, deleteVendor, updateVendorMembership } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.use(protect, admin);

router.route('/users').get(getUsers);
router.route('/users/:id').delete(deleteUser);

router.route('/vendors').get(getVendors);
router.route('/vendors/:id').delete(deleteVendor).put(updateVendorMembership);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getVendorsByCategory, getVendorProducts, createOrder, getUserOrders } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/vendors').get(getVendorsByCategory);
router.route('/vendors/:vendorId/products').get(getVendorProducts);
router.route('/orders').post(createOrder).get(getUserOrders);

module.exports = router;

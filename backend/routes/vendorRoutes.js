const express = require('express');
const router = express.Router();
const { getProducts, addProduct, deleteProduct, getVendorOrders, updateOrderStatus } = require('../controllers/vendorController');
const { protect, vendorOnly } = require('../middleware/authMiddleware');

router.use(protect, vendorOnly);

router.route('/products').get(getProducts).post(addProduct);
router.route('/products/:id').delete(deleteProduct);
router.route('/orders').get(getVendorOrders);
router.route('/orders/:id/status').put(updateOrderStatus);

module.exports = router;

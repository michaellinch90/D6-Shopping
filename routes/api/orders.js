const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//get /api/order/cart
router.get('/cart', ordersCtrl.cart);
//post /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart)
//post / api/order/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
//post /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart)

module.exports = router;
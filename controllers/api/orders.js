const Order = require('../models/order')
//const item = require('../models/item')

//a cart is the unpaid items
async function cart(req, res) {
    //cart is unpaid items
    const cart = await Order.getCart(req.user_id);
    res.json(cart);
}

//add an item the the cart
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}

//updates an items qty in the cart
async function setItemQtyInCart(req, res) {
    let cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
}

//update the carts isPaid to true
async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout
}
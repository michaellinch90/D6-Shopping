const Order = require('../models/order')
//const item = require('../models/item')

//a cart is the unpaid items
async function cart(req, res){
//cart is unpaid items
const cart = await Order.getCart(req.user_id);
res.json(cart);
}

//add an item the the cart
async function addToCart(req,res){

}

//updates an items qty in the cart
async function setItemQtyInCart(req, res) {

}

//update the carts isPaid to true
async function checkout(req,res){

}

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout
}
import sendRequest from "./send-request-api";

const BASE_URL = '/api/orders'

//retireve unpaid item 
export function getCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(itemId){
    //only sent item id for security reasons
    //no pricing
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
  }

// update the item's qty in the cart
//will add item if not currently in cart
//sends info via data to payload instead of long url
export function setItemInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT, { item, newQty }');
}

//updates the items to isPaid to true
export function checkout(){
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST')
}

export function getOrderHistory(){
    return sendRequest(`${BASE_URL}/history`)
}
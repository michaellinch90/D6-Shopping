const mongoose = require('mongoose');
const { insertMany } = require('./category');
const item = require('./item');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
    //set qty to 1 when new item pushed into lineItems
    qty: { type:Number, default: 1 },
    item: itemSchema
}, {
    timestamps: true,
    //makes virtual for exxtPrice. serialize into json
    toJSON: { vituals: true }
});

lineItemSchema.vitual('extPrice').get(function () {
    //this is bound to lineItem subdoc    
    return this.qty * this.item.price;
});

const orderSchema = new Schema({
    //an ordeer belongs to a user
    user: { type: Schema.Types.ObjectId, ref: 'Uer'},
    //embeded list line items is logical
    lineIteams: [lineItemSchema],
    //unpaid item is the cart
    isPaid: { type: Boolean, default: false}
}, {
    timestamps: true,
    
});

// orderSchema Virtuals

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function (){
    return this.lineIteams.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function (){
    return this.id.slice(-6).toUpperCase();
});
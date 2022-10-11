const mongoose = require('mongoose');


//ensure the category model is processed by mongoose 
//(for populating store item quiries)
require('./category');
const itemSchema = require('./itemSchema')

module.exports = mongoose.model('Item', itemSchema)
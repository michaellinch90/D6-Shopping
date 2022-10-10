//schema is appended to the name of the folder
//so that we know we are exporting a schema
//not a compiled model

const Schema = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: True
    },
    picture: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: True,
        default: 0
    }
}, {
    timestamps: True
});
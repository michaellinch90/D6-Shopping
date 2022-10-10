//schema is appended to the name of the folder
//so that we know we are exporting a schema
//not a compiled model

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});
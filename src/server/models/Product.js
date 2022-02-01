const { Schema, model } = require('mongoose');

const schema = new Schema({
    product_name: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, default: null },
    characteristic: { type: String, required: true },
    price: { type: Number, required: true }
})

module.exports = model('Product', schema)

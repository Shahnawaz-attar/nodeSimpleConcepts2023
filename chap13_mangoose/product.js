const mongoose = require('mongoose');

// create schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    
}
);

module.exports = mongoose.model('products', productSchema);
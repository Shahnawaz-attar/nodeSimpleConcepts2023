const mongoose = require('mongoose');

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost/e-comm', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,

        });
        const ProductModel = mongoose.model('products', productSchema);
        const product = new ProductModel({
            name: 'Mango',
            price: 10,
            category: 'Fruit',
        });
        await product.save();
        console.log(product);

        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log(err);
    }

}
// main();

// update product

const updateProduct = async () => {
    try {
        await mongoose.connect('mongodb://localhost/e-comm', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,

        });
        const ProductModel = mongoose.model('products', productSchema);
        const product = await ProductModel.findOne({ name: 'Mango' });
        product.price = 20;
        await product.save();
        console.log(product);

        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log(err);
    }

}



// updateProduct();


// delete product
const deleteProduct = async () => {
    try {
        await mongoose.connect('mongodb://localhost/e-comm', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,

        });
        const ProductModel = mongoose.model('products', productSchema);
        const product = await ProductModel.findOne({ name: 'Mango' });
        await product.remove();
        console.log(product);

        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log(err);
    }

}
deleteProduct();
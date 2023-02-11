const express = require('express');
const dbConnect =  require('./mongodb');
const app = express();
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;

app.use(express.json());

 app.get('/', async (req, res) => {
    let collection = await dbConnect();
    let result = await collection.find({}).toArray();
    res.send(result);
    
 });



 // insert a new product

    app.post('/', async (req, res) => {
        let collection = await dbConnect();
        let result = await collection.insertOne(req.body);
        res.send(result);
    }
    );


    // update a product  //http://localhost:3000/Samsang
    app.put('/:name', async (req, res) => {
       
        let collection = await dbConnect();
        let result = await collection.updateOne({ name: req.params.name }, { $set: req.body });
        res.send(result);
    }
    );

    // delete a product by _id
    app.delete('/:_id', async (req, res) => {
        let collection = await dbConnect();
        let result = await collection.deleteOne({ _id: ObjectId(req.params._id) });
        res.send(result);
    }
    );

 app.listen(3000, () => {
    console.log('server started at port 3000');
}
);
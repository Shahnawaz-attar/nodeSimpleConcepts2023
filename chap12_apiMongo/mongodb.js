var express = require('express');
const { MongoClient } = require('mongodb');
var app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);



async function dbCollection() {

    let result = await client.connect();
    db = result.db(dbName);
    return db.collection('products');

}


module.exports = dbCollection;
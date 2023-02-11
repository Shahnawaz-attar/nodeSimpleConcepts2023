const express = require("express");
require("./config");

const product = require("./product");

// mongoose.ObjectId
const ObjectId = require("mongoose").Types.ObjectId;

const app = express();
app.use(express.json());

app.post("/create", (req, res) => {
  const products = new product(req.body);
  products
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

// update product
app.put("/update/:id", (req, res) => {
  product
    .findByIdAndUpdate(req.params.id, req.body, { new: true })

    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

// get product
app.get("/get", (req, res) => {
  product
    .find()

    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

// delete product
app.delete("/delete/:id", async (req, res) => {
  try {
    await product.deleteOne(req.params);
    res.send("Deleted");
  } catch (err) {
    res.send(err);
  }
});

// search product
app.get("/search/:name", (req, res) => {
  product
    .find({
      $or: [{ name: { $regex: req.params.name, $options: "i" } }],
    })

    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});

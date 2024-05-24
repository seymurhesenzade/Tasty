const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Schema = mongoose.Schema;
const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const DB_URL =
  "mongodb+srv://qasanovsako9:azmp101@cluster0.ddw6kpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const SchemaTasty = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const ModelSchema = mongoose.model("Tasty", SchemaTasty);

app.get("/products", async (req, res) => {
  try {
    const products = await ModelSchema.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "Not Found Data" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ModelSchema.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ModelSchema.findByIdAndDelete(id);
    if (product) {
      res.status(200).send({ message: "Deleted Successfully", data: product });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/products", async (req, res) => {
  try {
    const newProduct = new ModelSchema({ ...req.body });
    await newProduct.save();
    res.status(200).send({ message: "success", data: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link:http://localhost:${port}`);
  });
});

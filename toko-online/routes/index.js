var express = require("express");
var router = express.Router();
var products = require("../data/products.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Toko online Sederhana",
    products: products,
    query: "",
  });
});

module.exports = router;

const products = require("../../data/products.json");

const index = (req, res) => {
  res.render("index", {
    title: "Toko online Sederhana",
    products: product,
  });
};

module.exports = {index};

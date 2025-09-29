router.get("/:id", function (req, res, next) {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Produk tidak tersedia");
  }

  res.render("product-detail", {
    title: product.name,
    product: product,
  });
});

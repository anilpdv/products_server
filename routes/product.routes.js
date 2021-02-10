module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Retrieve all Products
  app.get("/products", products.findAll);

  // Retrieve products by filtered column
  app.get("/search", products.findAllByFilter);
};

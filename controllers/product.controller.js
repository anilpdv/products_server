const Product = require("../models/product.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

exports.findAllByFilter = (req, res) => {
  let product = {};
  product.gender = req.query.gender;
  product.budget_min = req.query.budget_min;
  product.budget_max = req.query.budget_max;
  product.age = req.query.age;
  product.category = req.query.category;

  Product.getByFilter(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

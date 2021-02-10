const sql = require("./db.js");

// constructor
const Product = function (product) {
  this.category = product.category;
  this.gender = product.gender;
  this.age = product.age;
};

Product.getAll = (result) => {
  let gender = "male";
  sql.query(`SELECT * FROM products`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.getByFilter = (product, result) => {
  let gender = product.gender;
  let category = product.category;
  let budget_min = product.budget_min;
  let budget_max = product.budget_max;
  let age = product.age;

  sql.query(
    "SELECT * FROM products where gender =? and category =? and budget BETWEEN ? AND ? and age =?",
    [gender, category, budget_min, budget_max, age],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("products: ", res);
      result(null, res);
    }
  );
};

module.exports = Product;

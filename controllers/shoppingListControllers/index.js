const { getShoppingListController } = require("./getShoppingListController");
const { addProductToListController } = require("./addProductToListController");
const {
  removeProductFromListController,
} = require("./removeProductFromListController");

module.exports = {
  getShoppingListController,
  addProductToListController,
  removeProductFromListController,
};

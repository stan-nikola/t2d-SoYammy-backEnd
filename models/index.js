const { connectToDb } = require("./connection");
const Recipe = require("./recipieModel");

module.exports = {
  connectToDb,
  Recipe,
};

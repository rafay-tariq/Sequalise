var DataTypes = require("sequelize/lib/data-types");
var db = require("../db");
exports.User = (sequelize) => {
  const User = db.define("users", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      defaultValue: "test@gmail.com",
    },
    gender: {
      type: DataTypes.STRING,
    },
  });
  return User;
};

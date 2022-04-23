// var db = require("../models");
const Users = require("../models/users");
const db = require("../database/db");
const { Sequelize } = require("sequelize");
var addUser = async (req, res) => {
  console.log("inside the uer controller");

  // let data = await db.users.create({
  //   name: "rafay",
  //   email: "rafay@gmail.com",
  //   gender: "male",
  // });
  let data = await db.users.findAll({
    attributes: [
      "name",
      [Sequelize.fn("upper", Sequelize.col("name")), "upperName"],
    ],
  });
  console.log(data);
  console.log("data", data[0].dataValues);
  let response = {
    data: "ok",
  };
  return res.status(200).json(data[0].dataValues);
};

var oneToOne = async (req, res) => {
  let response = {
    data: "ok",
  };
  return res.status(200).json(response);
};
module.exports = { addUser, oneToOne };

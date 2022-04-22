// var db = require("../models");
const Users = require("../models/users");
const db = require("../database/db");

var addUser = async (req, res) => {
  console.log("inside the uer controller");

  let data = await db.users.create({
    name: "rafay",
    email: "rafay@gmail.com",
    gender: "male",
  });
  console.log("data", data.dataValues);
  let response = {
    data: "ok",
  };
  return res.status(200).json(data.dataValues);
};
module.exports = { addUser };

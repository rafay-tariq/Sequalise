// var db = require("../models");
const User = require("../models/users");

var addUser = async (req, res) => {
  let data = await User;
  await data.save();
  let response = {
    data: "ok",
  };
  res.status(200).json(response);
};
module.exports = addUser;

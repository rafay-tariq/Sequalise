const db = require("../database/db");
const { Sequelize } = require("sequelize");
const User = db.users;
const Post = db.posts;
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
  const data = await User.findAll({
    attributes: ["name", "email"],
    include: [{ model: Post, attributes: ["name"] }],
    where: { id: 8 },
  });
  return res.status(200).json(data);
};
var belongsTo = async (req, res) => {
  const data = await Post.findAll({
    // attributes: ["name", "email"],
    // include: [{ model: Post, attributes: ["name"] }],
    // where: { id: 8 },
    include: User,
  });

  return res.status(200).json(data);
};
module.exports = { addUser, oneToOne, belongsTo };

var DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize) => {
  const Posts = sequelize.define("posts", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });

  return Posts;
};

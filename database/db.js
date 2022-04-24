const Sequelize = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");
const sequelize = new Sequelize("sequalise", "root", "rafay123", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000 },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/users")(sequelize);
db.posts = require("../models/posts")(sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync");
});

db.users.hasOne(db.posts, {
  foreignKey: "user_id",
});
db.posts.belongsTo(db.users, {
  foreignKey: "user_id",
});

module.exports = db;

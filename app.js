const express = require("express");

const userController = require("./controllers/userController");
const app = express();
const port = 8080;
app.get("/", (res, resp) => {
  resp.send("Home page");
});

app.get("/add", userController.addUser);
app.get("/oneToOne", userController.oneToOne);
app.get("/belongsTo", userController.belongsTo);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`** Error: ${err.message} `.red);
});

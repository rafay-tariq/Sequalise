const express = require("express");

const { addUser } = require("./controllers/userController");
const app = express();
const port = 8080;
app.get("/", (res, resp) => {
  resp.send("Home page");
});
app.get("/add", addUser);
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`** Error: ${err.message} `.red);
});

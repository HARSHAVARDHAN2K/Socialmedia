const express = require("express");
const app = express();
const port = 8000;
//below module is used to develop a single common layout to all the web pages
const expressLayouts = require("express-ejs-layouts");

// setting up EJS Engine
app.set("view engine", "ejs");
app.set("views", "./views");

//use express router
// We have to tell our app to use that library before requiring the routes in an index.js
// file { entry point }.
app.use(expressLayouts);
app.use("/", require("./routes"));
app.use(express.static("./assets"));
//Extract style and scripts from the sub pages into the layout using
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${port}`);
  }

  console.log(`server running on port: ${port}`);
});

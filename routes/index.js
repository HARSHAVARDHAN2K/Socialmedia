const express = require("express");

const router = express.Router();

console.log("router loaded");

//Controllers
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/users", require("./Users"));
router.use("/posts", require("./Posts"));


module.exports = router;

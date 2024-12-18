const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");

router
  .get("/getAllUser", userController.getAllUser)
  .post("/createUser", userController.createUser)
  .post("/getUser", userController.getUser);

module.exports = router;

const express = require("express");
const Controller = require("../controller");
const router = express.Router();

router.get("/users", Controller.readUsers);
router.post("/register", Controller.createUser);
router.get("/users/:id", Controller.readUsersById);
router.delete("/users/:id", Controller.deleteUsersById);

module.exports = router;

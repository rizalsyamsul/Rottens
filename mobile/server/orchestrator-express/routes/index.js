const express = require("express");
const Controller = require("../controllers");
const router = express.Router();

//users
router.get("/users", Controller.getAllUsers);
router.post("/users", Controller.createUser);
router.get("/users/:mongoId", Controller.getUserById);
router.delete("/users/:mongoId", Controller.deleteUserById);

//main entity
router.get("/movies", Controller.getAllMovies);
router.post("/movies", Controller.createMovie);
router.get("/movies/:id", Controller.getMovieById);
router.put("/movies/:id", Controller.updateMovie);
router.delete("/movies/:id", Controller.deleteMovieById);

module.exports = router;

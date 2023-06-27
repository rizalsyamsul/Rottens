const express = require("express");
const Controller = require("../controllers");
const authentication = require("../middlewares/authentication");
const router = express.Router();

//user
router.get("/user/movies", Controller.fetchMoviesforUser);
router.get("/user/movies/:id", Controller.fetchMoviesDetailforUser);

//admin
router.post("/login", Controller.login);

//main entity
router.get("/movies", Controller.fetchMovies);
router.post("/movies", Controller.addMovies); //pake transactions
router.get("/movies/:id", Controller.fetchMoviesById);
router.put("/movies/:id", Controller.editMoviesById);
router.delete("/movies/:id", Controller.deleteMovies);

//second entity
router.get("/genres", Controller.fetchGenres);
router.post("/genres", Controller.addGenres);
router.get("/genres/:id", Controller.fetchGenresById);
router.put("/genres/:id", Controller.editGenresById);
router.delete("/genres/:id", Controller.deleteGenres);

router.post("/register", Controller.registerAdmin);

module.exports = router;

const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, Genre, Movie, Cast } = require("../models");

class Controller {
  static async fetchMoviesforUser(req, res, next) {
    try {
      let data = await Movie.findAll({
        include: [{ model: Genre }, { model: Cast }],
        order: [["id", "ASC"]],
      });
      if (!data) throw { name: "NotFound" };

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async fetchMoviesDetailforUser(req, res, next) {
    try {
      let { id } = req.params;
      let data = await Movie.findByPk(id, {
        include: [
          { model: Genre },
          { model: Cast },
          { model: User, attributes: { exclude: ["password"] } },
        ],
      });
      if (!data) throw { name: "NotFound" };

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) throw { name: "EmailRequired" };
      if (!password) throw { name: "PasswordRequired" };

      let data = await User.findOne({
        where: { email: email },
      });

      if (!data) throw { name: "Invalid" };

      let compare = comparePassword(password, data.password);
      if (!compare) throw { name: "Invalid" };

      let payload = {
        id: data.id,
        username: data.username,
        email: data.email,
      };

      let access_token = signToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  //admin
  //main entity
  static async fetchMovies(req, res, next) {
    try {
      let data = await Movie.findAll({
        include: [{ model: Genre }, { model: Cast }],
        order: [["id", "ASC"]],
      });
      if (!data) throw { name: "NotFound" };

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async addMovies(req, res, next) {
    try {
      let payload = req.body;
      // payload.authorId = req.user.id;
      await Movie.createMovie(payload);
      res.status(201).json({ message: "Movie has been created" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async fetchMoviesById(req, res, next) {
    try {
      let { id } = req.params;

      let movie = await Movie.findByPk(id, {
        include: [{ model: Genre }, { model: Cast }],
      });
      if (!movie) throw { name: "NotFound" };
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }
  static async editMoviesById(req, res, next) {
    try {
      let { id } = req.params;
      let newData = req.body;
      newData.trailerUrl = newData.trailerUrl.replace("https://youtu.be/", "");
      newData.slug = newData.title.replace(/\s+/g, "").toLowerCase() + "-6661";
      let movie = await Movie.update(newData, { where: { id } });
      if (!movie) throw { name: "BadRequest" };
      res.status(200).json({ message: `Movie with id ${id} edited` });
    } catch (error) {
      next(error);
    }
  }
  static async deleteMovies(req, res, next) {
    try {
      let { id } = req.params;

      let movie = await Movie.findByPk(id);
      if (!movie) throw { name: "NotFound" };

      await Movie.destroy({
        where: { id },
      });
      res.status(200).json({ message: `Movie with id ${id} deleted` });
    } catch (error) {
      next(error);
    }
  }

  //second entity
  static async fetchGenres(req, res, next) {
    try {
      let data = await Genre.findAll({
        order: [["id", "ASC"]],
      });
      if (!data) throw { name: "NotFound" };

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async addGenres(req, res, next) {
    try {
      let data = await Genre.create(req.body);
      res.status(201).json({ data, message: "new Genre has been created" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async fetchGenresById(req, res, next) {
    try {
      let { id } = req.params;

      let genre = await Genre.findByPk(id);
      if (!genre) throw { name: "NotFound" };
      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }
  static async editGenresById(req, res, next) {
    try {
      let { id } = req.params;
      let newData = req.body;
      let genre = await Genre.update(newData, { where: { id } });
      if (!genre) throw { name: "BadRequest" };
      res.status(200).json({ message: `genre with id ${id} edited` });
    } catch (error) {
      next(error);
    }
  }
  static async deleteGenres(req, res, next) {
    try {
      let { id } = req.params;

      let genre = await Genre.findByPk(id);
      if (!genre) throw { name: "NotFound" };

      await Genre.destroy({
        where: { id },
      });
      res.status(200).json({ message: `Genre with id ${id} deleted` });
    } catch (error) {
      next(error);
    }
  }

  //register New Admin
  static async registerAdmin(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email || email == undefined) throw { name: "EmailRequired" };
      if (!password) throw { name: "PasswordRequired" };

      let check = await User.findOne({
        where: { email: email },
      });

      if (check) throw { name: "AlreadyExist" };
      let newUser = req.body;
      let data = await User.create(newUser);
      res.status(201).json({ id: data.id, email: data.email });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

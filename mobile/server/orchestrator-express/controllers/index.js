const axios = require("axios");
const BASEURL_USER = "http://localhost:4001";
const BASEURL_APP = "http://localhost:4002";
const redis = require("../config/redis");

class Controller {
  //users
  static async getAllUsers(req, res) {
    try {
      let sendData;
      const usersCache = await redis.get("users:users");
      if (!usersCache) {
        let { data } = await axios({
          method: "get",
          url: `${BASEURL_USER}/users`,
        });
        await redis.set("users:users", JSON.stringify(data));
        sendData = data;
        console.log("ini fecth");
      } else {
        console.log("ini cache");
        sendData = JSON.parse(usersCache);
      }
      res.status(200).json(sendData);
    } catch (error) {
      console.log(error);

      res.status(error.response.status).json(error.response.data);
    }
  }
  static async createUser(req, res) {
    try {
      let { username, email, password } = req.body;
      if (!username || !email || !password)
        throw { status: 400, msg: "Bad Request" };
      let payload = req.body;
      let { data } = await axios({
        method: "post",
        url: `${BASEURL_USER}/register`,
        data: payload,
      });
      await redis.del("users:users");
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      if (error.status) {
        return res.status(error.status).json({ message: error.msg });
      }

      res.status(error.response.status).json(error.response.data);
    }
  }
  static async getUserById(req, res) {
    try {
      let { mongoId } = req.params;
      let { data } = await axios({
        method: "get",
        url: `${BASEURL_USER}/users/${mongoId}`,
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async deleteUserById(req, res) {
    try {
      let { mongoId } = req.params;
      let { data } = await axios({
        method: "delete",
        url: `${BASEURL_USER}/users/${mongoId}`,
      });
      await redis.del("users:users");
      res.status(200).json(data);
    } catch (error) {
      console.log(error.response.data);
      res.status(error.response.status).json(error.response.data);
    }
  }

  //main entity
  static async getAllMovies(req, res) {
    try {
      let sendData;
      let moviesCache = await redis.get("app:movies");
      if (!moviesCache) {
        let { data } = await axios({
          method: "get",
          url: `${BASEURL_APP}/movies`,
        });
        await redis.set("app:movies", JSON.stringify(data));
        sendData = data;
        console.log("ini fecth movies");
      } else {
        console.log("ini cache movies");
        sendData = JSON.parse(moviesCache);
      }
      res.status(200).json(sendData);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async createMovie(req, res) {
    try {
      let payload = req.body;
      let { data } = await axios({
        method: "post",
        url: `${BASEURL_APP}/movies`,
        data: payload,
      });
      await redis.del("app:movies");
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async getMovieById(req, res) {
    try {
      let { id } = req.params;
      let { data } = await axios({
        method: "get",
        url: `${BASEURL_APP}/movies/${id}`,
      });
      let mongoId = data.userMongoId;

      let response = await axios({
        method: "get",
        url: `${BASEURL_USER}/users/${mongoId}`,
      });
      data.User = response.data;
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async deleteMovieById(req, res) {
    try {
      let { id } = req.params;
      let { data } = await axios({
        method: "delete",
        url: `${BASEURL_APP}/movies/${id}`,
      });
      await redis.del("app:movies");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    }
  }
  static async updateMovie(req, res) {
    try {
      let { id } = req.params;
      let payload = req.body;
      let { data } = await axios({
        method: "put",
        url: `${BASEURL_APP}/movies/${id}`,
        data: payload,
      });
      await redis.del("app:movies");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    }
  }
}

module.exports = Controller;

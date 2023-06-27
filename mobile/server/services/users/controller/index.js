const { ObjectId } = require("mongodb");
const MongoDBConnect = require("../config");
const { hashPassword } = require("../helpers/bcrypt");

class Controller {
  static async readUsers(req, res) {
    const { db } = MongoDBConnect;
    try {
      const data = await db
        .collection("users")
        .find()
        .project({ password: 0 })
        .toArray();

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async readUsersById(req, res) {
    const { id } = req.params;
    const { db } = MongoDBConnect;
    const _id = new ObjectId(id);
    try {
      const data = await db
        .collection("users")
        .findOne({ _id }, { projection: { password: 0 } });
      if (!data) throw { status: 404, msg: "Data not Found" };
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      if (error.status) {
        return res.status(error.status).json({ message: error.msg });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteUsersById(req, res) {
    const { id } = req.params;
    const { db } = MongoDBConnect;
    const _id = new ObjectId(id);
    try {
      const data = await db.collection("users").deleteOne({ _id });
      if (data.deletedCount == 0) throw { status: 404, msg: "Data not Found" };
      console.log(data);
      res.status(200).json({ message: `User Deleted` });
    } catch (error) {
      console.log(error);
      if (error.status) {
        return res.status(error.status).json({ message: error.msg });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async createUser(req, res) {
    const { db } = MongoDBConnect;
    try {
      let { username, email, password } = req.body;
      if (!username || !email || !password)
        throw { status: 400, msg: "Bad Request" };
      let user = await db.collection("users").findOne({ email: email });
      if (user) throw { status: 400, msg: "Email already registered" };

      let payload = {
        username,
        email,
        password: hashPassword(password),
        role: "admin",
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      };

      let data = await db.collection("users").insertOne(payload);
      res.status(201).json({ message: `New User Created` });
    } catch (error) {
      console.log(error);
      if (error.status) {
        return res.status(error.status).json({ message: error.msg });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;

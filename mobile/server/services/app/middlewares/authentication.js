const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    let { access_token } = req.headers;

    if (!access_token) throw { name: "Unauthorized" };
    let payload = decodeToken(access_token);

    let data = await User.findByPk(payload.id);
    if (!data) throw { name: "Unauthorized" };

    req.user = {
      id: data.id,
      username: data.username,
      email: data.email,
    };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;

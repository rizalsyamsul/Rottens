const axios = require("axios");
const BASEURL_USER = "https://34.87.170.11:4001";
const redis = require("../config/redis");
const CACHE_USER = "users_graphql:users";
const typeDefs = `#graphql
  type User{
    _id: ID,
    username: String,
    email: String,
    role: String,
    phoneNumber: String,
    address: String,
  }

  type Response{
    message: String
  }
  type Query{
    findUsers: [User]
    findUserById(id: ID!): User
  }
  type Mutation{
    createUser(username: String,
    email: String,
    password: String,
    role: String,
    phoneNumber: String,
    address: String,): Response

    deleteUser(id: ID!): Response
  }
`;

const resolvers = {
  Query: {
    findUsers: async () => {
      try {
        let sendData;
        const usersCache = await redis.get(CACHE_USER);
        if (!usersCache) {
          let { data } = await axios({
            method: "get",
            url: `${BASEURL_USER}/users`,
          });
          await redis.set(CACHE_USER, JSON.stringify(data));
          sendData = data;
          console.log("ini fecth");
        } else {
          console.log("ini cache");
          sendData = JSON.parse(usersCache);
        }
        return sendData;
      } catch (error) {
        throw error.response.data;
      }
    },
    //find by Id
    findUserById: async (_, args) => {
      try {
        let { id } = args;
        let { data } = await axios({
          method: "get",
          url: `${BASEURL_USER}/users/${id}`,
        });
        return data;
      } catch (error) {
        throw error.response.data;
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      try {
        let payload = args;
        let { data } = await axios({
          method: "post",
          url: `${BASEURL_USER}/register`,
          data: payload,
        });
        await redis.del(CACHE_USER);
        return data;
      } catch (error) {
        throw error;
      }
    },

    deleteUser: async (_, args) => {
      try {
        let { id } = args;
        let { data } = await axios({
          method: "delete",
          url: `${BASEURL_USER}/users/${id}`,
        });
        await redis.del(CACHE_USER);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = [typeDefs, resolvers];

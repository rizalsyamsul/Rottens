const axios = require("axios");
const BASEURL_APP = "https://34.87.170.11:4002";
const BASEURL_USER = "https://34.87.170.11:4001";
const redis = require("../config/redis");
const CACHE_APP = "app_graphql:movies";
const typeDefs = `#graphql
  type Movie{
    id: ID,
    title: String,
    slug: String,
    synopsis: String,
    trailerUrl: String,
    imgUrl: String,
    rating: Int,
    genreId: Int,
    userMongoId: String,
    Genre: Genre,
    User: User,
    Casts: [Cast]
  }

  type Genre{
    id: ID,
    name: String
  }

  type User{
    _id: ID,
    username: String,
    email: String,
    role: String,
    phoneNumber: String,
    address: String,
  }

  type Cast{
    id: ID,
    movieId: Int,
    name: String,
    profilePict: String
  }
  input Castinput{
    name: String,
    profilePict: String
  }
  type Response{
    message: String
  }

  type Query{
    findAllMovies: [Movie]
    findMovieById(id:ID): Movie
    findAllGenre: [Genre]
  }

  type Mutation{
    createMovie( title: String,
    slug: String,
    synopsis: String,
    trailerUrl: String,
    imgUrl: String,
    rating: Int,
    genreId: Int,
    userMongoId: String,
    casts: [Castinput]
    ): Response

    updateMovie(id: ID!,
     title: String,
    slug: String,
    synopsis: String,
    trailerUrl: String,
    imgUrl: String,
    rating: Int,
    genreId: Int,
    userMongoId: String,
    ): Response

    deleteMovie(id: ID!): Response
  }
`;

const resolvers = {
  Query: {
    findAllMovies: async () => {
      try {
        let sendData;
        let moviesCache = await redis.get(CACHE_APP);
        if (!moviesCache) {
          let { data } = await axios({
            method: "get",
            url: `${BASEURL_APP}/movies`,
          });
          await redis.set(CACHE_APP, JSON.stringify(data));
          sendData = data;
          console.log("ini fecth movies");
        } else {
          console.log("ini cache movies");
          sendData = JSON.parse(moviesCache);
        }
        return sendData;
      } catch (error) {
        throw error;
      }
    },

    findMovieById: async (_, args) => {
      try {
        let { id } = args;
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
        return data;
      } catch (error) {
        throw error;
      }
    },
    findAllGenre: async () => {
      try {
        let sendData;
        let genresCache = await redis.get("app_graphql:genres");
        if (!genresCache) {
          let { data } = await axios({
            method: "get",
            url: `${BASEURL_APP}/genres`,
          });
          await redis.set("app_graphql:genres", JSON.stringify(data));
          sendData = data;
        } else {
          sendData = JSON.parse(genresCache);
        }
        return sendData;
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    createMovie: async (_, args) => {
      try {
        let payload = args;
        let { data } = await axios({
          method: "post",
          url: `${BASEURL_APP}/movies`,
          data: payload,
        });
        await redis.del(CACHE_APP);
        return data;
      } catch (error) {
        throw error;
      }
    },
    updateMovie: async (_, args) => {
      try {
        let { id } = args;
        let payload = args;
        let { data } = await axios({
          method: "put",
          url: `${BASEURL_APP}/movies/${id}`,
          data: payload,
        });
        await redis.del(CACHE_APP);
        return data;
      } catch (error) {
        throw error;
      }
    },

    deleteMovie: async (_, args) => {
      try {
        let { id } = args;
        let { data } = await axios({
          method: "delete",
          url: `${BASEURL_APP}/movies/${id}`,
        });
        await redis.del(CACHE_APP);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = [typeDefs, resolvers];

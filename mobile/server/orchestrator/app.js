const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const [userTypeDefs, userResolvers] = require("./schema/userSchema");
const [movieTypeDefs, movieResolvers] = require("./schema/movieSchema");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, movieTypeDefs],
  resolvers: [userResolvers, movieResolvers],
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 80 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});

require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
class MongoDBConnect {
  static db = false;
  static async connect() {
    let uri = process.env.MONGO_ATLAS_URI;
    let mongoClient;
    try {
      mongoClient = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      console.log("Connecting to Mongo DB");
      await mongoClient.connect();
      console.log("Success connect to Mongo DB");
      this.db = mongoClient.db("rotten");
      return "Success";
    } catch (error) {
      console.log("Connecting to Mongo DB Error", error);
      throw error;
    }
  }
}

module.exports = MongoDBConnect;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://samproject99:AHhsveGDdkTgttxh@cluster0.i0dpm3y.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

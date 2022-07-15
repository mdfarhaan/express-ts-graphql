import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
import APIroutes from "./api";

const PORT = config.PORT || 5000;

export const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app, path: "/graphql" });

  app.use("/api/v1", APIroutes());

  app.use("/", (req: Request, res: Response) => {
    res.send("API");
  });

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();

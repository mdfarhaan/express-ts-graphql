import { Db, MongoClient } from "mongodb";
import config from "../../config";

let db: Db;

async function initializeClient(): Promise<Db> {
  try {
    const client = await MongoClient.connect(
      `${config.MONGODB_URI}/<db>?retryWrites=true&w=majority`
    );
    console.log("Connection to database successful");
    return client.db();
  } catch (err) {
    console.log(err);
    console.log("Error connecting to database!");
  }
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};

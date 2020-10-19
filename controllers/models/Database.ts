import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

export class DatabaseController {
  private client;
  constructor() {
    this.client = new MongoClient();
    this.client.connectWithUri("mongodb://localhost:27017");
  }
  initModels(database) {
  return this.client.database(database);
}
}

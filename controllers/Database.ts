import { Database } from "https://deno.land/x/denodb/mod.ts";
import { User } from "./models/User.ts";

export class DatabaseController {
  client: Database;

	/**
   * Initialise database client
   */
  constructor() {
    this.client = new Database('mongo', {
        uri: 'mongodb://127.0.0.1:27017',
        database: 'test',
      });
  }

  /**
   * Initialise models
   */
  async initModels() {
    this.client.link([]);
    await this.client.sync({});
  }

  initModels() {
    // Add User here
    this.client.link([User]);
    return this.client.sync({});
}
}
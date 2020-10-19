import { DatabaseController } from "./models/Database.ts";
const dataBase = await new DatabaseController().initModels("test");
const collection = dataBase.collection("data");

export class userController {
  findOne(props:any){
    return collection.findOne({"name":`${props}`});
  }
  insertData(props:any){
    collection.insertOne({
      name:`${props}`
    })
  }
}
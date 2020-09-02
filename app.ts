import { Application, Router, Status } from "https://deno.land/x/oak/mod.ts";
import { DatabaseController } from "./controllers/Database.ts";
import { UserRoutes } from "./routers/UserRoute.ts";

const app = new Application();
const router = new Router();
const userRoutes = UserRoutes(router);

app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

await new DatabaseController().initModels();

console.log("🚀 Deno start !");
await app.listen("127.0.0.1:3001");
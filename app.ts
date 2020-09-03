import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { UserRoutes } from "./routers/Route.ts";

const app = new Application();
const router = new Router();
const userRoutes = UserRoutes(router);

app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

await app.listen("127.0.0.1:3001");
console.log("🚀 Deno start !");

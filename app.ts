import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { UserRoutes } from "./routers/Route.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();
const router = new Router();
const userRoutes = UserRoutes(router);
app.use(oakCors()); // Enable CORS for All Routes
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

await app.listen("127.0.0.1:3001");
console.log("🚀 Deno start !");
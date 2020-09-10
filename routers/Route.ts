import { Router, Status, RouterContext  } from "https://deno.land/x/oak/mod.ts";
import { userController } from "../controllers/UserController.ts";
const controller = new userController();
export function UserRoutes(router: Router) {
  return router
    .get("/user/:id", async (ctx: RouterContext) => {
      const users = await controller.findOne(ctx.params.id);
      if (users) {
        ctx.response.status = Status.OK;
        ctx.response.body = users;

      } else {
        ctx.response.status = Status.NotFound;
        ctx.response.body = [];
      }
    })
    .post("/insert", async(ctx: RouterContext)=>{
      const { name } = await ctx.request.body;
      if(name){
        await controller.insertData(name)
        ctx.response.status = Status.OK;
        ctx.response.body = 'Success!'
      }
    })
}
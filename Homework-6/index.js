import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "<h2>WELCOME TO THE INDEX PAGE</h2>";
  ctx.status = 200;
});
router.get("/about", (ctx) => {
  ctx.body = "<h2>WELCOME TO THE ABOUT PAGE</h2>";
  ctx.status = 200;
});
router.get("/contact", (ctx) => {
  ctx.body = "<h2>WELCOME TO THE CONTACT PAGE</h2>";
  ctx.status = 200;
});
app.use(router.routes());
const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} Portunda Çalışmaya Başladı.`);
});
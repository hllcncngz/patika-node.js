import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/index", (ctx) => {
  ctx.body = "<h2>WELCOME TO THE INDEX PAGE</h2>";
  ctx.status = 200;
});
router.get("/hakkimda", (ctx) => {
  ctx.body = "<h2>WELCOME TO THE ABOUT PAGE</h2>";
  ctx.status = 200;
});
router.get("/iletisim", (ctx) => {
  ctx.body = "<h2>WELCOME TO THE CONTACT PAGE</h2>";
  ctx.status = 200;
});
app.use(router.routes());
const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} Portunda Çalışmaya Başladı.`);
});
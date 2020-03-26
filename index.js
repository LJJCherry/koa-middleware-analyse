const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log("第一个中间件");
  await next();
  console.log("离开了第一个中间件");
});

app.use(async (ctx, next) => {
  console.log("第二个中间件");
  await next();
  console.log("离开了第二个中间件");
});

app.use(async (ctx, next) => {
  console.log("第三个中间件");
  await next();
  console.log("离开了第三个中间件");
});

// app.use(async ctx => {
//   ctx.body = "Hello World";
// });

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

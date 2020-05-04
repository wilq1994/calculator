const Koa = require("koa");
const graphQLMiddleware = require("./graphql");

const app = new Koa();
app.use(graphQLMiddleware);
app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
});

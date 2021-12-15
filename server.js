const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db/db.json"));
const cardRouter = jsonServer.router(path.join(__dirname, "db/card.json"));
const clevercardsTfsRouter = require("./com/clevercards/tfs/tfs-router");
const clevercardsPerfectCardRouter = require("./com/clevercards/eml/perfectcard-router");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 9002;
const HOST = process.env.HOST || "0.0.0.0";

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

server.all("/api/timeout", (req, res, next) => {
  setTimeout(next, 60000);
});

server.all("/api/card/card-status/60000", (req, res, next) => {
  setTimeout(next, 60000);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

const isAuthorized = (_) => {
  return true;
};

server.use((req, res, next) => {
  if (isAuthorized(req)) {
    // add your authorization logic here
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});

server.use("/clevercards/tfs", clevercardsTfsRouter);
server.use("/clevercards/perfectcard", clevercardsPerfectCardRouter);

// Register api
server.use("/api/card", cardRouter);
server.use("/api", router);

server.listen(PORT, HOST, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

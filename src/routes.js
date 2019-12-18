const { Router } = require ("express");
const routes = Router();
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");
const IcecreamController = require("./controllers/IcecreamController");
const SaleController = require("./controllers/SaleController");

routes.post("/user", UserController.store);
routes.get("/user/:email", UserController.index);
routes.get("/user", UserController.list);
routes.delete("/user/:id", UserController.destroy);

routes.post("/session", SessionController.store);

routes.post("/icecream", IcecreamController.store);
routes.get("/icecream/:flavor", IcecreamController.index);
routes.get("/icecream", IcecreamController.list);
routes.put("/icecream/:id", IcecreamController.update);
routes.delete("/icecream/:id", IcecreamController.destroy);

routes.use = (authMiddleware);
routes.post("/users", authorizationMiddleware, UserController.store);
routes.delete("/users/:id", authorizationMiddleware, UserController.destroy);

routes.post("/sale", SaleController.store);
routes.get("/sale", SaleController.list);
routes.get("/sale/:id", SaleController.index);

module.exports = routes;

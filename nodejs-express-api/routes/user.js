const userController = require('../controllers/user');
const { Router } = require("express");
const createProtectedRouter = require('../helpers/createProtectedRouter');
const { withJWTAuthMiddleware } = require("express-kun");

const router = Router();
const protectedRouter = withJWTAuthMiddleware(router, 'yourSecretKey');
protectedRouter.post("/", userController.create);
protectedRouter.get("/", userController.getAll);
router.post("/login", userController.login);
protectedRouter.get("/:id", userController.get);

module.exports = router;
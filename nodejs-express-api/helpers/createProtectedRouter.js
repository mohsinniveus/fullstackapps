const { Router } = require('express');
const { withJWTAuthMiddleware } = require("express-kun");

module.exports = {
  createProtectedRouter:function() {
    const router = Router();
    return withJWTAuthMiddleware(router, 'yourSecretKey');
  }
}
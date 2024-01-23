const { controller } = require("../controller");
const express = require("express");
const postsRouter = express.Router()

postsRouter.get("/", controller.getPosts)



postsRouter.get("/posts/query", controller.queryGet)


module.exports = { postsRouter }
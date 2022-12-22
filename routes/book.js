const express = require("express");
const bookRouter = express.Router();

const BookController = require("../controllers/BookController");
const auth = require("../middleware/auth");

bookRouter
  .route("/:id")
  .get(BookController.getById)
  .patch(BookController.update)
  .delete(BookController.delete);

bookRouter
  .use(auth)
  .route("/")
  .get(BookController.index)
  .post(BookController.create);

module.exports = bookRouter;

import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "./../controllers/bookController.js";
import { adminGuard, authGuard } from "./../middleware/authMiddleware.js";
const router = express.Router();


router.route("/").post(authGuard, adminGuard, createBook).get(getAllBooks);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updateBook)
  .delete(authGuard, adminGuard, deleteBook)
  .get(getBook);

export default router;

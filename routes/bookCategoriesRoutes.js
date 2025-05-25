import express from "express";
import {
  createBookCategory,
  deleteBookCategory,
  getAllBookCategories,
  getSingleCategory,
  updateBookCategory,
} from "./../controllers/bookCategoriesController.js";
import { adminGuard, authGuard } from "./../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(authGuard, adminGuard, createBookCategory)
  .get(getAllBookCategories);

router
  .route("/:bookCategoryId")
  .get(getSingleCategory)
  .put(authGuard, adminGuard, updateBookCategory)
  .delete(authGuard, adminGuard, deleteBookCategory);

export default router;

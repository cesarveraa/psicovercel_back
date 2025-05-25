import express from "express";
import { getHomePage, updateHomePage } from "./../controllers/homePageController.js";
import { authGuard, adminGuard } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route('/:slug')
  .put(authGuard, adminGuard, updateHomePage)
  .get(getHomePage);

export default router;

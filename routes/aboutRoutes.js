import express from "express";
import { getAbout, updateAbout } from "./../controllers/aboutController.js";
import { uploadPicture } from "./../middleware/uploadPictureMiddleware.js";
import { authGuard, adminGuard } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route('/:slug')
  .put(authGuard, adminGuard, uploadPicture.array('photos'), updateAbout)
  .get(getAbout);

export default router;

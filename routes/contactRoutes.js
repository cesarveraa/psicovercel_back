import express from "express";
import { getContactUs, updateContactUs } from "./../controllers/contactUsController.js";
import { uploadPicture } from "./../middleware/uploadPictureMiddleware.js";
import { authGuard, adminGuard } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route('/:slug')
  .put(authGuard, adminGuard, uploadPicture.array('photos'), updateContactUs)
  .get(getContactUs);

export default router;

import express from "express";
import { getZA, updateZA } from "./../controllers/zaController.js";
import { uploadPicture } from "./../middleware/uploadPictureMiddleware.js";
import { authGuard, adminGuard } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route('/:slug')
  .put(authGuard, adminGuard, uploadPicture.fields([
    { name: 'accionesInvestigativasP' },
    { name: 'presenteInvestigacionP' }
  ]), updateZA)
  .get(getZA);

export default router;

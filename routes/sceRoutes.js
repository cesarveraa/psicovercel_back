import express from "express";
import { getSCE, updateSCE } from "./../controllers/sceController.js";
import { uploadPicture } from "./../middleware/uploadPictureMiddleware.js";
import { authGuard, adminGuard } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route('/:slug')
  .put(authGuard, adminGuard, uploadPicture.fields([
    { name: 'accionesInvestigativasP' },
    { name: 'presenteInvestigacionP' }
  ]), updateSCE)
  .get(getSCE);

export default router;

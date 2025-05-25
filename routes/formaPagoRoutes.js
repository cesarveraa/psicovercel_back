import express from 'express';
import { createFormaPago, getAllFormaPago, getFormaPagoById, updateFormaPago, deleteFormaPago } from '../controllers/formaPagoController.js';
import { authGuard, adminGuard } from '../middleware/authMiddleware.js';
import { uploadPicture } from '../middleware/uploadPictureMiddleware.js';

const router = express.Router();

router.route('/formaspago')
  .get(getAllFormaPago)
  .post(authGuard, adminGuard, uploadPicture.single('image'), createFormaPago);

router.route('/formaspago/:id')
  .get(getFormaPagoById)
  .put(authGuard, adminGuard, uploadPicture.single('image'), updateFormaPago)
  .delete(authGuard, adminGuard, deleteFormaPago);

export default router;

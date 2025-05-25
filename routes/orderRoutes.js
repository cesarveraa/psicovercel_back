import express from 'express';
import { getOrderById, getAllOrders, createOrder, updateOrder, deleteOrder, setOrderApprovalStatus, setOrderAdminViewStatus } from '../controllers/orderController.js';
import { authGuard, adminGuard } from '../middleware/authMiddleware.js';
import { uploadPicture } from '../middleware/uploadPictureMiddleware.js';

const router = express.Router();

router.route('/orders')
  .get(authGuard, adminGuard, getAllOrders)
  .post(authGuard, uploadPicture.single('comprobante'), createOrder);

router.route('/orders/:id')
  .get(authGuard, getOrderById)
  .put(authGuard, uploadPicture.single('comprobante'), updateOrder)
  .delete(authGuard, adminGuard, deleteOrder);

router.route('/orders/:id/approve')
  .patch(authGuard, adminGuard, setOrderApprovalStatus);

router.route('/orders/:id/view')
  .patch(authGuard, adminGuard, setOrderAdminViewStatus);

export default router;

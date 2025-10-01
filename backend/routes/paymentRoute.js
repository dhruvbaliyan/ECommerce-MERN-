import express from 'express';
import { protectRoute } from '../middleware/authMiddleware.js';
import {createCheckoutSession , checkoutSuccess} from '../controllers/paymentController.js';



const router = express.Router();
router.use(protectRoute);

router.post('/create-checkout-session' , createCheckoutSession)

router.get('/checkout-success' , checkoutSuccess)

export default router;
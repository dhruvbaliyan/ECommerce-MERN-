import express from 'express';
import { protectRoute } from '../middleware/authMiddleware.js';
import { getCoupon, validateCoupon } from "../controllers/couponController.js";

const router= express.Router();

router.use(protectRoute);

router.get('/' , getCoupon);

router.get('/validate' ,validateCoupon );


export default router;
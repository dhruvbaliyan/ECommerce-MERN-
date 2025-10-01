import express from 'express';
import { protectRoute} from '../middleware/authMiddleware.js';
import {
    getCartProducts,
    addToCart,
    updateQuantity,
    removeAllFromCart
} from '../controllers/cartController.js';

const router =  express.Router();

router.use(protectRoute);
router
    .route('/')
    .get(getCartProducts)
    .post(addToCart)
    .delete(removeAllFromCart);

router.put("/:id" , updateQuantity);

export default router;
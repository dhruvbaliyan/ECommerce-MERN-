import express from "express";
import {adminRoute, protectRoute} from '../middleware/authMiddleware.js'
import {
    getProducts , 
    createProduct , 
    getFeaturedProducts , 
    getProductsByCategory} 
from "../controllers/productController.js";



const router = express.Router();

router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);

router.use(protectRoute);
router.use(adminRoute);

router
    .route('/')
    .get(getProducts)
    .post(createProduct);



export default router;
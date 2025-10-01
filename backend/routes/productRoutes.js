import express from "express";
import {adminRoute, protectRoute} from '../middleware/authMiddleware.js'
import {
    getProducts , 
    createProduct , 
    getFeaturedProducts , 
    getProductsByCategory,
    toggleFeaturedProduct,
    deleteProduct,
    getRecommendedProducts} 
from "../controllers/productController.js";
import { upload } from "../middleware/multer.js";


const router = express.Router();

router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);


router.use(protectRoute);
router.use(adminRoute);

router
    .route('/')
    .get(getProducts)
    .post(upload.single("image"),createProduct);

router
    .route('/:id')
    .patch(toggleFeaturedProduct)
    .delete(deleteProduct)



export default router;
import jwt from "jsonwebtoken";
import User from '../models/userModel.js';

export const protectRoute = async(req, res, next)=>{
    try {
        const accessTokens=  req.cookies.accessTokens;
        if(!accessTokens){
            return res.status(401).json({ message: "Unauthorized - No access token provided" });
        }
        const decoded = jwt.verify(accessTokens, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;

        next();


    } catch (error) {
        console.log(error);
        
    }
}


export const adminRoute = (req, res, next) => {
	if (req.user && req.user.role === "admin") {
		next();
	} else {
		return res.status(403).json({ message: "Access denied - Admin only" });
	}
};
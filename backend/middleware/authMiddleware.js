const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {

        console.log("Authorization Header:", req.headers.authorization);
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: "Token not provided"
            });
        }
        //Extract the token part from bearer token
        const token = authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message:"Token missing"
            });
        }

        console.log("Received Token:", token);
        const decoded = jwt.verify(token, "helpdesk_secret_key"); //verify token
        console.log("Decoded Token:", decoded);
        req.user = decoded; //attach the user data to the request object
        next(); //proceed to next middleware or route handler
    } catch (error) {
        console.log("JWT Error:", error);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = authMiddleware;
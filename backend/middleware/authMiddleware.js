const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        // Get token from header
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                message:"Token not provided"
            });

        }

        // Remove Bearer word

        const token = authHeader.split(" ")[1];

        // Verify token

        const decoded = jwt.verify(
            token,
            "helpdesk_secret_key"
        );

        // Store user information
        req.user = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({
            message:"Invalid token"
        });
    }
};

module.exports = authMiddleware;
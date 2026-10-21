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

        const token = authHeader.split(" ")[1];

        console.log("Received Token:", token);

        const decoded = jwt.verify(token, "helpdesk_secret_key");

        console.log("Decoded Token:", decoded);

        req.user = decoded;

        next();

    } catch (error) {

        console.log("JWT Error:", error);

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = authMiddleware;
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    // const token = req.headers.token;
    const token = req.cookies.token;
    console.log('Token is '+token)
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded.userId;
        next()
    } else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}
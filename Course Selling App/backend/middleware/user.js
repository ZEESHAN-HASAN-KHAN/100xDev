const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    // const token = req.headers.token;
    const token = req.cookies.token;
    console.log('Token is ' + token)
    try{
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded.userId;
        next()
    } else {
        res.status(404).json({
            message: "You are not signed in"
        })
    }
    } catch (e)
    {
        res.status(404).json({
            message:"You are not signed"
        })
    }

}

module.exports = {
    userMiddleware: userMiddleware
}
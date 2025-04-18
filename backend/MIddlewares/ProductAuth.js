const jwt = require('jsonwebtoken');


const ensureAuthenticated = async (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth) {
        res.status(401)
        .json({
            message: "unauthorize, jwt token is required"
        })
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err) {
        res.status(401)
        .json({
            message: "unauthorized, wrong or expired jwt token"
        })
    }
}
module.exports = {ensureAuthenticated}
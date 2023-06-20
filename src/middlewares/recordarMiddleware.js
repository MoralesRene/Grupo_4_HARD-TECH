const recordarMiddleware = (req, res, next) => {
    if (req.cookies?.recordar && !req.session.userLogged) {
        req.session.userLogged = req.cookies.recordar
    }
    next()
};

module.exports = recordarMiddleware

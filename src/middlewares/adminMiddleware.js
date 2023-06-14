const adminMiddleware = (req, res, next) => {
    if (req.session.userLogged?.roles.name == "Administrador") {
        res.locals.role = "Administrador"
    }
    next()
}

module.exports = adminMiddleware
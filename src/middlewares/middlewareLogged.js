let middlewareLogged = (req, res, next) => {
    if (!req.session.logged) res.redirect('/')
}

module.exports = middlewareLogged
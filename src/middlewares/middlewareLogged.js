module.exports = (req, res, next) => {
    if (req.session.logged) {
        res.redirect('/')
    }
    next()
}
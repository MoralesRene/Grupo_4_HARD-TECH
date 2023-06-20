const path = require('path')

let comunicarmeController= {

    quieroComunicarme: function (req, res) {
        res.render("quieroComunicarme")
    },
};
module.exports = comunicarmeController;
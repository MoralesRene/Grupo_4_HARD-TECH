const path = require("path");

let cartController = {
  index: function (req, res) {
    switch (req.params.element) {
      case "ship":
        res.render("cart-ship");
      case "pay":
        res.render("cart-pay");
      case "resume":
        res.render("cart-resume");
    }
  },
};

module.exports = cartController;

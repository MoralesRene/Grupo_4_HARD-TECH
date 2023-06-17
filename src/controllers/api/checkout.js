const db = require("../../database/models")

const apiCheckoutController = {
    checkout: async (req,res)=>{
        try {
            const orderItems = req.body.orderitems
            const ordenCompra = await db.Order.create({
                paymentMethod: req.body.paymentMethod,
                shippingMethod: req.body.shippingMethod,
                total: req.body.total,
                users_id: req.session.userLogged.id
           },
           )
           const ordenItemCreate = await db.OrderItem.bulkCreate(
            orderItems.map(items=>{
                return {
                    ...items,
                    orders_id:ordenCompra.id
                }
            })
           )
           res.json({estado:true,order:ordenCompra,products:ordenItemCreate})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = apiCheckoutController
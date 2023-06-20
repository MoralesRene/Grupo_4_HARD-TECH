const path = require('path')
const db = require("../database/models");
let userController = {
    index: async (req, res) => {
        const orders= await db.Order.findAll({
            where:{
                users_id:req.session.userLogged.id
            }
        })
        res.render("users/profile",
            { session: req.session.userLogged,orders })
    },
    updateUser: async (req,res)=>{
        try {
            const user = req.session.userLogged
            const userUpdate = {
                name:req.body.name,
                dni:req.body.documento,
                phone:req.body.telefono,
                avatar: req.file ? req.file.filename : req.session.userLogged.avatar,
                locality:req.body.localidad,
                adress:req.body.domicilio,
                number:req.body.altura
               }
               const orders= await db.Order.findAll({
                where:{
                    users_id:req.session.userLogged.id
        }})
           await db.Users.update(userUpdate,{
                where:{
                    id:user.id
                }
            })
            const userUpdated = await db.Users.findOne({
                where:{
                    id: user.id
                }
            })
            
            res.render("users/profile",{session:userUpdated,orders})
            
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = userController
import UsersManager from "../models/UsersManager.js"

const getAllUsers = (req,res)=>{
    let users =UsersManager.get()
    res.send(users)
}

const createNewUser = (req,res)=>{
    const user = req.body;
    //validaciones
    UsersManager.get(user);
    res.send({status:"sucess",message:"nuevo usuario added"})
}

export default {
    getAllUsers,
    createNewUser
}
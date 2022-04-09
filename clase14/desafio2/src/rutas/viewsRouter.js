import express from 'express';
import UsersManager from '../models/UsersManager.js';

const router =  express.Router();

router.get("/",(req,res)=>{
    res.render("home")
})

router.get("/users",(req,res)=>{
    let users = UsersManager.get();
    res.render("users",{
        users
    })
})

export default router; 
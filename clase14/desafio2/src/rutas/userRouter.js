import express from 'express';
import userControllers from '../controllers/userControllers.js';
import UsersManager from '../models/UsersManager.js';

const router =  express.Router();

router.get("/",(req,res)=>{
    let users = UsersManager.get();
    res.send(users);
    
})

export default router; 

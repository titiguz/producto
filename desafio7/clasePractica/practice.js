import express from "express";
//import moment from 'moment';

const app = express();
const PORT = process.env.PORT || 8080; 
const server = app.listen(PORT,()=>{
console.log(`Listening on PORT ${PORT}`)
})


 let contador = 0;
app.get('/papa',(req,res)=>{
    res.send("hola ruta papa")
 })
app.get('/papaconqueso',(req,res)=>{
    res.status(200).send("hola jeje pero desde la ruta papa con quesito")
})
app.get('/papacontadora',(req,res)=>{
    res.send(`visitaste ${++contador} veces`)
})


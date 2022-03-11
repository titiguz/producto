import express from "express";
import fs from "fs";

const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})

let counter = 0;
let counter2 = 0;

app.get("/items", async (req, res)=>{
    ++counter;
    const product = await fs.promises.readFile("./files/productos.txt","utf-8");
    const prodArray = await JSON.parse(product);
    const obj = {items: prodArray, cantidad: prodArray.length};
    res.send(obj);
})

app.get("/item-random", async (req, res)=>{
    ++counter2;
    const product = await fs.promises.readFile("./files/productos.txt","utf-8");
    const prodArray = await JSON.parse(product);
    const random = Math.floor(Math.random()*(prodArray.length));
    const obj = {item: prodArray[random]};
    res.status(200).send(obj);
})

app.get("/visitas", (req, res)=>{
    const obj = {visitas: {items: counter, itemRandom: counter2}};
    res.send(obj);
})
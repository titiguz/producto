import express from "express";
import __dirname from "./utils.js";

const app = express();
const server = app.listen(8080,()=>console.log("Listening on PORT 8080"));

app.use(express.static(__dirname+"/public"))
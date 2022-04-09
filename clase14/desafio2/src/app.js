import express from "express";
import usersRouter from "./rutas/userRouter.js"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import viewsRouter from "./rutas/viewsRouter.js"

const app= express()
const server = app.listen(8080);

app.engine("handlebars",handlebars.engine());
app.set("views",__dirname+"/views");
app.set("view engine","handlebars")

app.use("/", viewsRouter);
app.use(express.json())
app.use(express.static(__dirname+"/public"))
app.use("/api/users",usersRouter)
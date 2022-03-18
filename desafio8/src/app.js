import express from "express";
import { container } from "./work/container.js";


const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const productosWork = new container();

app.get("/api/productos",async (req, res)=>{
    const array = await productosWork.getProductos();
    (array.length === 0) ? res.send({error : 'no existen los productos mencionados..'}) : res.send(array);
});
app.get("/api/productos/:id",async (req, res)=>{
    const id = req.params.id;
    const prod = await productosWork.getProductoById(id);
    (prod === undefined) ? res.send({error : 'No encontramos el producto seleccionado'}) : res.send(prod);
});

app.post("/api/productos", async (req, res)=>{
    const parametros = ["title", "price", "thumbnail"];
    const prodReq = req.body;
    if (parametros.every(prop => prodReq.hasOwnProperty(prop))){
        const productoAll = await productosWork.saveProducto(prodReq);
        res.send(productoAll);
    }else{
        res.send({error : 'ups, algo salió mal :('});
    }
});
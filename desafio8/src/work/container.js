import fs from "fs";

export class container {
    constructor(){
        this.productos = [];
    };
    async getProductos(){
        try {
            const read = await fs.promises.readFile("./src/productos.json", "utf-8");
            this.productos = await JSON.parse(read);
            return this.productos;
        } catch (error) {
            console.log("No pudimos leer el archivo: " + error.message);
        }
    };
    async getProductoById(id) {
        try {
            await this.getProductos();
            const prodById = this.productos.filter(prod => prod.id == id);
            return prodById[0];
        } catch (error) {
            console.log("No pudimos obtener el producto: " + error.message);
        }
    };
    async saveProducto(prod) {
        try {
            await this.getProductos();
            const id = this.productos[this.productos.length-1]?.id +1 || 1;
            const addProd = {...prod, id};
            this.productos.push(addProd);
            await fs.promises.writeFile("./src/productos.json",JSON.stringify(this.productos,null,"\t"));
            return addProd;
        } catch (error) {
            console.log("No pudimos guardar el producto: " + error.message);
        }
    };
};
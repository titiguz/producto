import fs from "fs";

class Archivo {
    constructor(nombre){
        this.nombre = nombre
    }
    async leer(log) {
        try {
            if (fs.existsSync(`./files/${this.nombre}`)) {
                const lectura = await fs.promises.readFile(`./files/${this.nombre}`, "utf-8");
                const array = await JSON.parse(lectura);
                log && console.log(array);
                return array;
            }
            else{
                log && console.log([]);
                return [];
            }
        } 
        catch (error) {
            console.log("UPS NO PUDIMOS LEER EL ARCHIVO :( " + error.message);
        }
    }
    async guardar(nuevoProducto){
        try {
            const array = await this.leer();
            nuevoProducto.id = array.length+1;
            array.push(nuevoProducto);
            await fs.promises.writeFile(`./files/${this.nombre}`,JSON.stringify(array,null,"\t"))
        } 
        catch (error) {
            console.log("NO GUARDAMOS EL ARCHIVO POR LO SIGUIENTE: " + error.message);
        }
    }
    async borrar(){
        try {
            await fs.promises.unlink(`./files/${this.nombre}`);
            console.log("BORRADO CON ÉXITO :)");
        } 
        catch (error) {
            console.log("NO PUDIMOS BORRARLO: " + error.message);
        }
    }
}

const escuadra = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
}
const calculadora = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
}
const globo = {
    title: "Globo Terraqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
}

const productos = new Archivo("productos.txt");

productos.leer("log");

const guardandoProductos = async () =>{
    await productos.guardar(escuadra);
    await productos.guardar(calculadora);
    await productos.guardar(globo);
} 
guardandoProductos();

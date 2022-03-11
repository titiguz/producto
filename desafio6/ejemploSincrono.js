//modulos nativos: elementos externos que no teniamos en nuestro archivo normal pero podiamos usar porque esttaban incluidos con nodemon.

//const fs = require("fs")
import fs from "fs";

fs.writeFileSync("primerArchivo.txt","papa con queso");

let content = fs.readFileSync("primerArchivo.txt", "utf-8")
console.log(content);

if(fs.existsSync('primerArchivo.txt')){
    content= fs.readFileSync('primerArchivo.txt','utf-8');

    console.log('Alterando archivo...')
    fs.appendFileSync('primerArchivo.txt',' Soy un programador feliz :)')
    console.log('Archivo modificado')
}else{
    console.log("No existe el archivo, creando archivo...");
    fs.writeFileSync('primerArchivo.txt','Otro contenido que no se me ocurre en este momento :)');
}



//OTRO EJ

// let content;
// let deletefile = true;
// if(fs.existsSync('primerArchivo.txt')){
//     content= fs.readFileSync('primerArchivo.txt','utf-8');

//     console.log('Alterando archivo...')
//     fs.appendFileSync('primerArchivo.txt',' Soy un programador feliz :)')
//     console.log('Archivo modificado')
// }else{
//     console.log("No existe el archivo, creando archivo...");
//     fs.writeFileSync('primerArchivo.txt','Otro contenido que no se me ocurre en este momento :)');
// }



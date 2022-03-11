import fs from "fs";
//por callbacks
//EXIST SOLO TIENE SYNC

//console.log("escribiendo archivo asincrono")



// fs.writeFile("segundoArchivo.txt","SOY ASINCRONO",(error)=>{
//     if(error) return console.log("error je");
//     console.log("creado")
// })


//otro ej
// console.log("leyendo archivo asincrono")
// fs.readFile("segundoArchivo.txt","utf-8",(err,content)=>{
//     if(err) return console.log("error je");
//     console.log(content)
// })
fs.appendFile('segundoArchivo.txt','contenido adicional',(err)=>{
    if(err) return console.log('Error al Actualizar el archivo')
})
fs.unlink('segundoArchivo.txt',(err)=>{
    if(err) return console.log('Error al eliminar archivo');
    console.log('Archivo eliminado');
})
console.log("archivo leido con éxito")

//EXISTS SÓLO TIENE SYNC
// if(fs.existsSync)
//console.log("Leyendo archivo asíncrono...")
// fs.writeFile('./files/segundoArchivo.txt','Soy un archivo bien asíncrono, témanme',(error)=>{
//     if(error) return console.log("Ocurrió un error al escribir el archivo");
//     console.log("Creado");
// })
// fs.readFile('./files/segundoArchivo.txt','utf-8',(err,content)=>{
//     if(err) return console.log("Error al leer el archivo");
    
//     console.log(content);
// })
// fs.appendFile('segundoArchivo.txt','contenido adicional',(err)=>{
//     if(err) return console.log('Error al Actualizar el archivo')
// })
// fs.unlink('segundoArchivo.txt',(err)=>{
//     if(err) return console.log('Error al eliminar archivo');
//     console.log('Archivo eliminado');
// })
//console.log("Archivo leído con éxito");
// // // console.log("hola")
// // // console.log("holi")

// // //ctrl c para dejar de escuchar con nodemon

// // let obj = {}
// // for (let i=0;i<1000;i++){
// //     let random = Math.floor(Math.random()*20+1)

// // }

// //EJERCICIO 

// // let obj = {}
// // for(let i=0;i<10000;i++){
// //     let random = Math.floor(Math.random()*20+1)
// //     if(obj[random]){
// //         obj[random]++
// //     }else{
// //         obj[random]=1;
// //     }
// // }
// // console.log(obj);
// // let sum = Object.values(obj).reduce((acumulador,actual)=>acumulador+actual);
// // console.log(sum);


// //EJERCICIO 

// let productos =[
//     {id:1,nombre:"Escuadra",precio:323.45},
//     {id:2,nombre:"Calculadora",precio:234.56},
//     {id:3,nombre:"Globo Terráqueo",precio:45.67},
//     {id:4,nombre:"Paleta Pintura",precio:456.78},
//     {id:5,nombre:"Agenda",precio:78.90},
// ];



// //1 solucion
// // let string = "";
// // productos.forEach(producto=>string=string+`,${producto.nombre}`)
// // console.log(string)
// // 2 solucion 
// //  let string = productos.map(producto => producto.nombre).join(",");
// //  console.log(string)

// //CALCULO EL TOTAL
// let total = productos.reduce((acumulador,valorActual)=>acumulador+valorActual.precio,0).toFixed(2); //el tofixed saca los decimales
// console.log(total)

// let promedio = (total/productos.length).toFixed(2);
// console.log(promedio)


// //FILTRO DE LA VIEJA ESCUEELA
// let max= productos[0].precio;
// let min = productos[0].precio;
// productos.forEach(producto=>{
//     if(producto.precio<min) min=producto.precio;
//     if(producto.precio>max) max=producto.precio;
// })
// // console.log(min)
// // console.log(max)





// //PREGUNTAR
// // let sendObj ={
// //     nombre: string,
// //     total,
// //     promedio,
// //     max,
// //     min
// // }
// // console.log(sendObj);













//segunda parte de la clase

// const http = require('http');

// const server = http.createServer((peticion,respuesta)=>{
//     let hora  = new Date().getHours();
//     if(hora>=6&&hora<=12) respuesta.end("<h1>buenos dias</h1>");
//     if(hora>=13&&hora<=19) respuesta.end("<h1>Buenas tardes</h1>");
//     if(hora<=5||hora>=20) respuesta.end("Buenas noches");
// // respuesta.end("hola desde mi servidor")

// })
// server.listen(8080,()=>{
//     console.log("Listening on port 8080")
// })


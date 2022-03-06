import http from 'http';

const server = http.createServer((peticion,respuesta)=>{
    let randomNumber =Math.floor(Math.random()*10)
    let objeto = {id: randomNumber ,title: "Producto " +randomNumber,
    price: (Math.random()*10000).toFixed(2),
    thumbnail: "Foto " + randomNumber}

    respuesta.end(JSON.stringify(objeto));
})
server.listen(8080,()=>{
    console.log("Listening on port 8080")
})


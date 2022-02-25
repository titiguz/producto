const fin = (cantPalabras)=> console.log(`En esa frase hay ${cantPalabras} palabras`);

const mostrarPalabras = (texto, callback, seg=7000)=>{
    return new Promise((resolve)=>{
        const arr = texto.split(" ");
        let contador = 0;
        let intervalID = setInterval(() => {
            if (contador < arr.length) {
                console.log(arr[contador]);
                contador++;
            }else{
                clearInterval(intervalID);
                callback(contador);
                resolve(contador);
            }
        }, seg);
    })
}

const funcionesCall = async () =>{
    let total = 0;
    total = await mostrarPalabras("La vida no siempre sonríe",fin,100);
    total = await mostrarPalabras("Pero al menos vale la pena vivirla",fin,100);
    console.log("haciendo otro proceso");
    console.log("PROBANDO...");
}
funcionesCall();


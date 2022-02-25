// console.log("INICIANDO");
let contador = 0;
const saludar = async() => {
    if(contador<15){
        console.log("HOLA")
        contador++;
    }else{
        clearInterval(timer);
    }
};
const despedirse = () =>{
    if(contador<5){
        console.log(`Hola ${contador}`)
        contador++;
    }else{
        clearInterval(timer);
    }
}
// setTimeout(saludar,5000);
console.log("Haciendo otro proceso");

const timer = setInterval(despedirse,1000);
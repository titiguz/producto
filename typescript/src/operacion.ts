const operacion = async (num1:number, num2:number, str:string) => {
    let calculo = await import ('./index.js');
    let resultado = await calculo.operaciones(num1, num2, str);
    console.log(resultado);
    return resultado;
};

operacion(7, 1, 'sumar');
operacion(6, 1, 'restar');
operacion(10, 2, 'x');
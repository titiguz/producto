const operacion = async (num1:number, num2:number, str:string) => {
    let calculo = await import ('./index.js');
    let resultado = await calculo.operaciones(num1, num2, str);
    console.log(resultado);
    return resultado;
};

operacion(2, 3, 'sumar');
operacion(5, 2, 'restar');
operacion(5, 2, 'dividir');
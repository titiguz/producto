export const operaciones = (num1: number, num2: number, str: string) => {
    return new Promise((resolve) => {
        resolve(
            str === 'sumar'
                ? num1 + num2
                : str === 'restar'
                ? num1 - num2
                : 'no es válido'
        );
    });
};
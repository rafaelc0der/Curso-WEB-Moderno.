// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
//  e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação
//  multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

const multiplicar = function (a , b ) {
    let resultado = 0
    for (let i = 0; i < b; i++){
       resultado += a
    }
    return console.log(resultado)
}

multiplicar(2, 20)
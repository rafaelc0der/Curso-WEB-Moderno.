// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array: 

const PrimeiroEUltimo = function (array = [1, 2, 3, 4, 5, 6]){
    let resultado = []
    if (array.length > 0){
        resultado.push(array[0], array[array.length - 1])
    }return console.log(resultado)
}


PrimeiroEUltimo()
PrimeiroEUltimo([9, 3, 5, 8])





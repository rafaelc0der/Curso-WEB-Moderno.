// armazenando uma funcao em uma var ou const
const imprimirSoma = function (a , b){
    console.log(a + b)
}
imprimirSoma (2 , 3)


// Armazenando uma funcao arrow em uma var ou const

const soma = (a , b) => {
    return a + b
}
    console.log(soma(2 , 3))

// Armazenando uma funcao arrow com retorno implicito em uma var ou const

const subtracao = (a , b) => a - b
 console.log(subtracao(2, 3))
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9 , 10)){
        console.log('Aprovado com honra')
    } else if(nota.entre(7 , 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4 , 6.99)){
        console.log('Recuperção')
    }else if (nota.entre(1 , 3.99)){
        console.log('Reprovado')
    }
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(7.5)
imprimirResultado(5)
imprimirResultado(3)
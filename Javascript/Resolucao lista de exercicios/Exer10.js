// Elabore uma função que recebe um número como parâmetro e
//  retorne uma string com o símbolo "+" na quantidade especificada no parâmetro

const retornaMais = function(a){
     var resultado = ""
    for (let i = 0; i < a; i++){
        resultado += '+'
    }return console.log(resultado)
}


retornaMais(5)
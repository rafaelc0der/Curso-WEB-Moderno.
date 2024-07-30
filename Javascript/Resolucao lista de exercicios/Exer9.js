// Escreva uma função que receba dois parâmetros. 
// O primeiro parâmetro é o elemento que repetirá, 
// enquanto que o segundo será o número de vezes que haverá repetição
// . Um array será retornado.

const retornaArray = function(a , b){
    resultados = []
    for (let i = 0; i < b; i++){
    resultados.push(a)}
    return console.log(resultados)
}

retornaArray(1, 2)
retornaArray("teste", 5)


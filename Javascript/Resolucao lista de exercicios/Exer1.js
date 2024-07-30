/*Crie uma função que retorna uma string "Olá", concatenada com um argumento
text(a ser passada para a função) e com ponto de exclamação no final "!".

*/
let cumprimentar = function (a){
    return console.log(`Olá, `.concat(a).concat("!"))

}

let cumprimentar2 = a => console.log(`Olá, `.concat(a).concat('!'))

cumprimentar('Rafael')
cumprimentar2("Rafael")



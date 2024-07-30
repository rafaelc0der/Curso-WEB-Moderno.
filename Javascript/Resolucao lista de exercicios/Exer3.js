/*
Desenvola uma funcão que recebe dois parâmetros, um é a quantidade
de horas trabalhadas por um funcionário num mês, e o quanto ele recebe
por hora. O retorno da função deve ser a string "Salário igual a X",
em que X é o quanto o funcionário ganhou no mês.
*/

let salarioMês = function(a , b){
    // a = horas trabalhadas
    // b = ganho por horas
    salario = a * b
    return console.log(`Salário igual a R$ ${salario}.`)
}

salarioMês(150, 40.50) 

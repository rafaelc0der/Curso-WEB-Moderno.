/*Crie uma função que recebe um número (1 a 12) e retorne o mês
correspondente como uma string. Exemplo, se a entrada for 2, a
função deverá retornar "fevereiro", pos este é o 2º mês.
*/
const numeroDoMes = function(mes){
const meses = ["janeiro", "fevereiro", "março", "abril", "maio",
    "junho", "julho", "agosto", "setembro", "outubro", "novembro",
     "dezembro"]
    if (mes < 1 || mes > 12 ){
        return console.log("Mês inválido")
    } else {console.log (meses[mes - 1])}
    
    }
numeroDoMes(1)
numeroDoMes(7)
numeroDoMes(-3)
numeroDoMes(14)

  
    
// recurso introduzido no ECMAscript 2015
const pessoa = {
    nome: 'Ana',
    idade: 25,
    peso: 78,
    endereco: { 
        Logradouro: 'Rua da Maria',
        numero: 1500,
    }
}
const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n , idade: i} = pessoa
console.log(n , i)
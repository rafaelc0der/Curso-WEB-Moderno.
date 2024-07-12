Array.prototype.reduce2 = function(callback){
    let acumulador = this [0]
    for (let i= 1; i < this.length; i ++ ){
        acumulador =callback(acumulador, this[i], this)

    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma))


const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 0)

// Desafio 1: Todos os alunos são bolsistas?

const E_bolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(E_bolsista))



// Desafio 2: Algum aluno é bolsista?

const AlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista). reduce2(AlgumBolsista ))
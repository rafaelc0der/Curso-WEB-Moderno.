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
console.log(alunos.map(a => a.bolsista).reduce(E_bolsista))



// Desafio 2: Algum aluno é bolsista?

const AlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista). reduce(AlgumBolsista ))
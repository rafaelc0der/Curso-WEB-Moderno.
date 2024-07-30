const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total = 0
for (let i = 0; i< alunos.length; i++){
     total += alunos[i].nota
}
console.log(total / alunos.length)

const getNota = alunos => alunos.nota
const soma = (total, nota) => total + nota
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)


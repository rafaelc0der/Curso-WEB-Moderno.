const notas = [6.3, 5.6, 6.7, 8.9, 10]
for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    peso: 58,
    idade: 36

}
for (let i in pessoa ){
    console.log(`${i.toUpperCase()} = ${pessoa[i]}`)
}
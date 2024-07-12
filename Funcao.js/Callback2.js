const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar o callback
let notasbaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

// com callback

notasbaixas = notas.filter(function (notas){
    return notas < 7
})
console.log(notasbaixas)


// Com arrow function
notasbaixas = notas.filter((nota)=>  nota < 7)
console.log(notasbaixas)
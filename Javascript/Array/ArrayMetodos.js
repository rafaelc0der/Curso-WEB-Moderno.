const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Vestappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento!!
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona ao primeiro
console.log(pilotos)

//splice pode  adicionar ou remover elementos

//adicionar elementos

pilotos.splice(2, 0,'Bottas', 'Massa')
console.log(pilotos)

// remover elementos 

pilotos.splice(3, 1,)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

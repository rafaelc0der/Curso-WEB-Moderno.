function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc)* (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(`${produto.nome}:`,produto.getPreco())

const carro = {preco: 90000, desc: 0.2, }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.3, '$'))
console.log(getPreco.apply(carro [0.3 , '$']))







function getPreco1 (imposto2 = 0 , moeda2 = 'R$'){
    return `${moeda2} ${this.preco * (1 - this.desc) * (1 + imposto2)}`
}

const produto2 = {
    nome: 'celular',
    preco: 2500,
    desc: 0.1,
    getPreco1

}
//global.desc = 0.4
//global.preco = 10
console.log(produto2.getPreco1())




function getpreco3 ( imposto3 = 0 , moeda3 = '$'){
    return `${moeda3} ${this.preco * (1 - desc) * (1 + imposto3)}`
}

const produto3 = {
    nome:  'Bike',
    preco: 3600,
    desc: 0.5,
    getpreco3
}

console.log(`${produto3.nome}:`,produto3.getpreco3())
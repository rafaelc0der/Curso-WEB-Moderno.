Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]

// Retorna um array apenas com os  preços
//método da aula
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)


//meu método
const paraObjeto2 = carrinho.map2(JSON.parse).map2(e => e.preco)
console.log(paraObjeto2)
function criarProduto (nome , preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 7999.99 ,))
console.log(criarProduto('Ipad', 2999.99))
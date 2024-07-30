//usando notação literal
const objt1 = {}
console.log(objt1)

// Object em JS

console.log(typeof Object, typeof new Object)

const objt2 = new Object
console.log(objt2)

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionário (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionário('João', 10000, 7)
const f2 = criarFuncionário('Maria', 9000, 1)

console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))


// Object Create

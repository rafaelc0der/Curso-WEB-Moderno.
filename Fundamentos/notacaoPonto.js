console.log(Math.ceil(6.1)) // ceil arredonda pra cima 

const obj1 = {}
obj1.nome = 'Bola'
//obj1 ['nome'] = 'bola2'
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome // this deixa o atributo publico
    this.exec = function (){
        console.log('Execc...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()
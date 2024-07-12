// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'  //.. Não fazer isso.
const avo = {attr1: 'A'}
 const pai = {__proto__:avo, attr2: 'B'}
 const filho = {__proto__:pai, attr3: 'C'}

 console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

 const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarmais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
 }

const ferrari = {
    modelo: 'f40',
    velMax: 324 

}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(300)
console.log(ferrari.status())
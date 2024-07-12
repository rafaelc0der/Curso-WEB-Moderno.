let dobro = function (a){
    return 2 * a
}

dobro1 = (a) => {
    return 2 * a
}

console.log(dobro1(2))
console.log(dobro(4))

dobro3 = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'Olá'

console.log(ola())
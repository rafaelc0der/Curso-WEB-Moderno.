function rand({min = 0 , max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 60 , max: 900}
console.log(rand(obj))
console.log(rand({min: 500 , max: 505}))
console.log(rand({min: 50}))

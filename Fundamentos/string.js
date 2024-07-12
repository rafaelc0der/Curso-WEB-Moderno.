//Cadeia de caracteres que pode ser "" ou '
const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // código associado a string
console.log(escola.indexOf('3')) // indica qual o índice do dado

console.log(escola.substring(1)) // imprime o índice a partir do primeiro
console.log(escola.substring(0, 3)) // imprime o índice mais 3 a frente menos o último

console.log("Escola ".concat(escola).concat("!"))

console.log(escola.replace(3, "e")) // substitui o indice

console.log("Ana,Maria,Pedro".split(',')) // adiciona um separador

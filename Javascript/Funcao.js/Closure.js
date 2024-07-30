// Closure é o escopo criado quando uma function é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função.
//Contexto léxico em ação.

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro (){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
console.log(typeof x)
console.log(typeof 'Local')
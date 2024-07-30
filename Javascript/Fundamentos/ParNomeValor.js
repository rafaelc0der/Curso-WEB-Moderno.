//par nome/ valor

const saudacao = 'Opa' //contexto léxico 1

function exec (){
    const saudacao = 'Falaaa'
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    Logradouro: 'Rua da Maria',
    numero: 123
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
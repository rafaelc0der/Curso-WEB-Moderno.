// estrategia 1 para gerar valor  padrao 
function soma1 (a , b , c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(0, 0, 0))

// // estrategia 2 para gerar valor  padrao 
function soma2 (a , b , c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN (c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(2), soma2(2, 3), soma2(2, 3 ,4))

function soma3( a = 1 , b = 2 , c =3){
    return a + b + c
}

console.log(soma3(), soma3(2), soma3(2, 3), soma3(2, 3, 4))

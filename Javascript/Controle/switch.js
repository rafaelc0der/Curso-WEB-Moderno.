const imprimirResultado = function(nota){
    switch  (Math.floor(nota)){
        case 10:
            
        case 9:
            console.log('Quadro de Honra')
            break // para o código 
        case 7: case 8:
            console.log('Aprovado')
            break
        case 5: case 6:
            console.log('Recuperação')
            break
        case 3: case 4:
            console.log('Reprovado')
            break
        case 0: case 1: case 2: 
            console.log('Idiota')
            break
        default: // se colocado em outra posição, é necessário o break
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(5.7)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(2)
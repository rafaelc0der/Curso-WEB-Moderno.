function compras (trabalho1 , trabalho2){
    const comprarSorvete =  trabalho1 || trabalho2 
    const comprarTv50 = trabalho1 && trabalho2 
 //   const comprarTV32 = !!(trabalho1 ^ trabalho2 ) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador uninario
    
    return {comprarSorvete, comprarTv50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))
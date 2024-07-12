const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)








const filmes = ["Homem de Ferro", "Deadpool", "Homem Aranha"]

 imprimir = (nome, indice)=> {
    console.log(`${indice + 1}. ${nome}`)
}

filmes.forEach(imprimir)






const lixo = ["Fabinho", "Fabio Dias", "Fábio Dias Pereira"]

imprimirLixo = (lixo1 , lixo2) =>{
    console.log(`${lixo2 +1}.${lixo1}`)
}

lixo.forEach(imprimirLixo)
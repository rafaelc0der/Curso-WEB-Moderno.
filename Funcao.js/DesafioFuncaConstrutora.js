class pessoa {
    constructor(nome){
        this.nome = nome
    
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa ('João')
p1.falar()


function pessoa1 (nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const chamar = new pessoa1 ('George')
chamar.falar()
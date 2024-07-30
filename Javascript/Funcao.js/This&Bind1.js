const pessoa = {
    saudação: 'Bom dia!',
    falar(){
        console.log(this.saudação)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()
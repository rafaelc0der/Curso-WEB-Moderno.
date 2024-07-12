function tratarErroElancar (erro){
    //throw new Error('...')
    //throw true
    // throw 10
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimirGritado(obj){
  try { 
      console.log(obj.name.toUpperCase()+ '!!!')
    } catch (e) {
    tratarErroElancar(e)
    } finally{
        console.log('final')
    }
 }

const obj = {name: 'Roberto'}
 imprimirGritado(obj)
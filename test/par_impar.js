function parEimpar(numero){
    if(numero % 2 === 0){
        return `O numero ${numero} é par`
    }else{
        return `O numero ${numero} é impar`
    }
}

module.exports = parEimpar

const transfomar = function (booleanos = [true, false]){
    const transformando = []

    for (const Booleano of booleanos){
        transformando.push (
            Booleano === true ? 'Concluído' : 'Pendente')
    }

    return transformando
        
}
console.log(transfomar([true]))
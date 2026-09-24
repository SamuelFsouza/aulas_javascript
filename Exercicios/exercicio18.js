const transfomar = function (booleanos = [true, false]){
    const transformando = []

    for (const Booleano of booleanos){
        transformando.push (Booleano === true ? console.log ( 'Concluído') : console.log ('Pendente'))
    }

    return transformando
        
}
transfomar([true])
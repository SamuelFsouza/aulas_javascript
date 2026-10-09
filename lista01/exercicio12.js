const notas = (notaAlunos=[]) => {

    for (const notas of notaAlunos)
        if (notas >= 7)
            console.log(`Aprovado com nota ${notas}`)

}
notas([7,10,1,3,2,8])
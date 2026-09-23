const notas = (notaAlunos=[5,9,1,2,8,0,9,8,7]) => {

    for (const notas of notaAlunos)
        if (notas >= 7)
            console.log(`Aprovado com nota ${notas}`)

}
notas()
const missoes = [
    {nome: "Derrotar chefe", pontos: 500},
    {nome: "Encontrar tesouro", pontos : 200},
    {nome: "Salvar personagem", pontos: 800},
    {nome: "Explorar mapa", pontos: 100}
];

function analisarMissoes (lista){


    
for (const { nome , pontos } of lista){

    let classificacao

        if (pontos >= 500)
            classificacao = "Missão difícil"
        else if (pontos >= 200)
            classificacao = "Missão Média"
        else
        classificacao = "Missão Fácil"

        console.log(`Missão: ${nome}, Dificuldade: ${classificacao}`)
        
    }
    }


analisarMissoes(missoes)

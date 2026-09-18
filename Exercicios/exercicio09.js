const idadePermitidade = function (idade) {
    return idade >= 18 ? `Permitida` : `Bloqueado`
}
console.log (`Entrada no cinema: ${idadePermitidade(25)}`)
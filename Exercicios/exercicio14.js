const calcularTotal = function(precos=[]) {
let total = 0

  for (const preco of precos) {
    total += preco
}

return total
}
console.log (`Resultado da soma de todos os preços: ${calcularTotal(precos=[70, 1, 9, 120])}`)
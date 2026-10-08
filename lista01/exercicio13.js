const loja = valorCompra => valorCompra > 150 ? `Frete grátis` : `Cobrar Frente`

console.log(`Frete: ${loja(160)}`)
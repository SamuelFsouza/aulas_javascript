const carrinho = [25.50, 10.00, 100.00, 5.00]

const totalCarrinho = carrinho.reduce((precos, valorAtual) => precos + valorFinal, 0)

console.log(totalCarrinho)
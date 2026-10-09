const listaVIP = (nomesClientes=[], buscarNome) => {

  for (const nomes of nomesClientes) {
    if (nomes === buscarNome) {
      return true
    }
  }
  return false
}

console.log(`O cliente é vip? ${listaVIP(['Samuel'])} `)
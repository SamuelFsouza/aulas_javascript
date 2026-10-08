const listaVIP = (nomesClientes=['Samuel'], buscarNome='Samuel') => {

  for (const nomes of nomesClientes) {
    if (nomes === buscarNome) {
      return true
    }
  }
  return false
}

console.log(`O cliente é vip? ${listaVIP(['Samuel'])} `)
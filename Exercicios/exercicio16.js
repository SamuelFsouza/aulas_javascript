const listaVIP = (nomes=['Samuel'], buscarNome='Samuel') => {

  for (const nome of nomes) {
    if (nome === buscarNome) {
      return true
    }
  }
  return false
}

console.log(`O cliente é vip? ${listaVIP(['Samuel'])} `)
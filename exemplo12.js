const frutas = [' Maçã', ' Banana',' Uva'];
const novaFruta = frutas.unshift(' Pera', ' Abacate',' Melância')

frutas.unshift()

console.log ("--------------------------------\n"+"Colocando Frutas\n")
console.log (`${frutas}`)
console.log(`---------------------------------`)
console.log(`Frutas adicionadas: ${novaFruta}`)
console.log("---------------------------------"+"\nRemovendo Frutas\n")

const FrutasRemovidas = frutas.splice(0,2)
console.log(`${frutas}`)
console.log(`---------------------------\n`+`Frutas Removidas: ${FrutasRemovidas}`)

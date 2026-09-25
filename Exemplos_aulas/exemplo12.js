const frutas = [' Maçã', ' Banana',' Uva'];
let novaFruta = frutas.unshift(' Pera', ' Abacate',' Melância')

console.log ("Colocando Frutas\n")
console.log (`${frutas}`)

console.log("\nRemovendo Frutas\n")

frutas.splice (-2)
console.log(`${frutas}`)

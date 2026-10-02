const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];

let quantidade = 0

for (const quant_classes in elementosFake){

  quantidade += elementosFake[quant_classes].classList.length

}
elementosFake.forEach (tag => console.log (`A tag: ${tag.tagName} possue a classe ${tag.classList.join(', ')}, cada uma possui esse número de classes:  ${tag.classList.length} \n`))






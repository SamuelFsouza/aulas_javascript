const calcularSalario=(salarios =[]) => {
  let gastoTotal = 0

  for (const salario of salarios) {
    gastoTotal += salario < 2000 ? salario * 1.1 : salario
  }

  return gastoTotal
}
console.log(`Gasto total: ${calcularSalario([1500]).toFixed(2)}`) 
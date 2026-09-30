export function saudacao(nome = 'visitante') {
    console.log (`Olá ${nome}`)
}
export const dobro = n => n * 2

export const moeda = valor => valor.toFixed(2).replace('.',',') 
    
export const validarMail = validarMail => validarMail.includes ('@') && validarMail.includes('.') ? true : false

export function dataFormatada(){
   const hoje = new Date()

 const ano = hoje.getFullYear()
 const dia = hoje.getDate() 
 const mes = hoje.getMonth() + 1



return `${dia}/${mes}/${ano}`

}


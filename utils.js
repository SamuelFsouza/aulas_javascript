export function saudacao(nome = 'visitante') {
    console.log (`Olá ${nome}`)
}
export const dobro = n => n * 2

export const formatar = num => 'R$' + num.toFixed(2).replace('.',',')

export function validarMail (mail){
    return mail.includes('@') && mail.includes('.')
}

const energiaInicial = function(energia){
   
    
    
    while (energia >= 0){
        console.log(`Energia restante: `, energia)
        energia -= 10
    }
    console.log("\nSem energia restante")
}
energiaInicial(100)
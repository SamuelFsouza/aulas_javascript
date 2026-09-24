function Robo(distanciaParede) {
    let passo = 0

    while (true) {
        passo++

        if (passo === distanciaParede) {
            console.log("Bateu e parou!")
            break
    }
  }
}
Robo(2000)
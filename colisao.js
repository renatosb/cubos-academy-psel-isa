function solucao(velocidade, aceleracao, distanciaObjeto) {
    const distanciaDerrapagem = -(velocidade * velocidade) / (2 * aceleracao);
    if (distanciaDerrapagem > distanciaObjeto) {
        console.log("COLISAO A FRENTE");
    } else {
        if (distanciaDerrapagem === distanciaObjeto) {
            console.log("NAO ACELERE");
        } else {
            console.log("CAMINHO SEGURO");
        }
    }
}
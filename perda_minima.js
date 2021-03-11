function solucao(precos) {
    let resultado = 0;
    let resultadoMenor = 0;
    for (let i = 0; i < precos.length; i++) {
        for (let j = i; j < precos.length; j++) {
            if (precos[i] > precos[j]) {
                resultado = precos[i] - precos[j];
                if (resultadoMenor === 0) {
                    resultadoMenor = resultado;
                }
            }
            if (resultado < resultadoMenor) {
                resultadoMenor = resultado;
            }
        }
    }
    console.log(resultadoMenor);
}
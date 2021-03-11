function solucao(palpite, palavra) {
	let contador = 0;
    for(let i = 0; i<palavra.length; i++){
        if(palavra.charAt(i) === palpite){
            contador++
        }
    }
    console.log(contador);
}
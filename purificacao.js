function solucao(stringCorrompida) {
	stringCorrompida = stringCorrompida.replace(/[!]|[@]|[#]|[$]|[%]|[&]|[*]|[(]|[)]/gi,"");
    console.log(stringCorrompida);
}
function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let items = [];
    let contador = 0;
    for(let item of produtos){
        if(item.valor <= valorMaximo  && item.avaliacao >= avaliacaoMinima ){
           items[contador++] = item;
        }
    }
    console.log(items);
}
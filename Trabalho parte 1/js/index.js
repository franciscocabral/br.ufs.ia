/**
 * Created by Francisco on 27/02/2016.
 */

$("#buscaEmProfundidade").on("click", function(){
    clearMap();
    buscaProfundidade(mapa, inicio, fim);
});
$("#buscaEmLargura").on("click", function(){
    clearMap();
    buscaLarguraComControle(mapa, inicio, fim);
});
$("#buscaAEstrelaEuclidiana").on("click", function(){
    clearMap();
    buscaAEstrelaEuclidiana(mapa, inicio, fim);
});
$("#buscaAEstrelaManthattan").on("click", function(){
    clearMap();
    buscaAEstrelaManhattan(mapa, inicio, fim);
});
$("#limpar").on("click", function(){
    clearMap();
    $("#results").html("")
});
$("#change").on("click", function(){
    clearMap();
});

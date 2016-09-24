/**
 * Created by Francisco on 27/02/2016.
 */

$("#algoritmoGenetico").on("click", function(){
    clearMap();
    echo("Execucao do Algoritmo Genetico.");
    algoritmoGenetico(n, false);
});
$("#algoritmoGeneticoLimitado").on("click", function(){
    clearMap();
    echo("Execucao do Algoritmo Genetico com limite de populacao em "+n+".");
    algoritmoGenetico(n, true);
});

$("#limpar").on("click", function(){
    clearMap();
    $("#results").html("")
});
$("#change").on("click", function(){
    clearMap();
});

/**
 * Created by Francisco on 28/02/2016.
 */


function buscaLarguraComControle(mapa, inicio, fim){
    echo("Executando Busca em Largura em {"+inicio.x+", "+inicio.y+"}, procurando por {"+fim.x+", "+fim.y+"}");
    var lista = [];
    lista[0] = inicio;

    var i = 0;
    var j = 0;
    var alg = function(){
        var actualPos = lista[j];
        if(typeof actualPos == 'undefined'){
            print(inicio, 'darkblue');
            print(fim, 'darkgreen');
            window.clearInterval(interval);
        }

        var testPoses = [up(actualPos), right(actualPos), down(actualPos), left(actualPos)];

        for(var k = 0; k < testPoses.length; k++) {
            if (canWalk(testPoses[k]) && !foiVisitado(testPoses[k])) {
                lista[++i] = testPoses[k];
                marcaVisita(testPoses[k]);
                print(testPoses[k], "darkred");
            }
        }
        j++;
        print(actualPos,"red");

        if(actualPos.x == fim.x && actualPos.y == fim.y) {
            print(inicio, 'darkblue');
            print(fim, 'darkgreen');
            echo("Iteracoes "+j);
            echo("-------------------------------");
            window.clearInterval(interval);
        }
    };

    var interval = setInterval(alg, 1);

};






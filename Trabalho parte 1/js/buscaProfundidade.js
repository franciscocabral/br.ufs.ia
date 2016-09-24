/**
 * Created by Francisco on 28/02/2016.
 */

function buscaProfundidade(mapa, inicio, fim){
    echo("Executando Busca em Profundidade em {"+inicio.x+", "+inicio.y+"},"+
            " procurando por {"+fim.x+", "+fim.y+"}");
    var fila = [];
    fila.push(inicio);
    var i = 0, j = 0;
    var alg = function(){
        var actualPos = fila[j];
        if(typeof actualPos == 'undefined'){
            print(inicio, 'darkblue');
            print(fim, 'darkgreen');
            window.clearInterval(interval);
        }
        var testPoses = [up(actualPos), right(actualPos), down(actualPos), left(actualPos)];
        var foundNext = false;
        for(var k = 0; k < testPoses.length; k++) {
            if (canWalk(testPoses[k]) && !foiVisitado(testPoses[k])) {
                fila.push(testPoses[k]);
                marcaVisita(testPoses[k]);
                print(testPoses[k], "darkred");
                foundNext = true;
                break;
            }
        }
        if(foundNext){
            j++
            print(actualPos,"red");
        }else{
            j--;
            fila.pop();
        }
        i++;
        if(actualPos.x == fim.x && actualPos.y == fim.y) {
            print(inicio, 'darkblue');
            print(fim, 'darkgreen');
            echo("Iteracoes "+i);
            echo("-------------------------------");
            window.clearInterval(interval);
        }
    };
    var interval = setInterval(alg, 30);
};

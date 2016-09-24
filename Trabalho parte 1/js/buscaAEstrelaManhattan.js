/**
 * Created by Francisco on 28/02/2016.
 */

function buscaAEstrelaManhattan(mapa, inicio, fim){
    echo("Executando A* Manhattan em {"+inicio.x+", "+inicio.y+"}, procurando por {"+fim.x+", "+fim.y+"}");
    var fila = [];
    fila.push(inicio);

    var i = 0;
    var j = 0;
    var alg = function(){
        var actualPos = fila[j];
        if(typeof actualPos == 'undefined'){
            print(inicio, 'darkblue');
            print(fim, 'darkgreen');
            window.clearInterval(interval);
        }

        var menor = actualPos;
        var testPoses = [up(actualPos), right(actualPos), down(actualPos), left(actualPos)];
        var possible = [];
        for(var k = 0; k < testPoses.length; k++) {
            var testPos = testPoses[k];
            if(canWalk(testPos) && !foiVisitado(testPos)) {
                var menorManhattan = calcManhattan(menor, fim);
                if(menor.x == actualPos.x && menor.y == actualPos.y){
                    menorManhattan *= 2;
                }
                if (calcManhattan(testPos, fim) < menorManhattan) {
                    menor = testPos;
                    possible = [];
                    possible[0] = testPos;
                } else if (calcManhattan(testPos, fim) == menorManhattan) {
                    possible.push(testPos);
                }
            }
        }

        for(var k = 0; k < possible.length; k++){
            fila.push(possible[k]);
            marcaVisita(possible[k]);
            print(possible[k],"darkred");
            break;
        }
        if(possible.length > 0) {
            j++;
            print(actualPos,"red");
        }else{
            if(fila.length > 1) {
                j--;
                fila.pop();
            }
        }
        console.log(calcDistancia(actualPos, fim))
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


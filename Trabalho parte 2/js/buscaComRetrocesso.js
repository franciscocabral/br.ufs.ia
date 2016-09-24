/**
 * Created by Fancisco on 14/03/2016.
 */

function geraRandomDiferemte(min, max, old) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if(num == old && old < max) num++;
    else num--;

    return num;
}

function avaliarRestricoes(individuo) {
    var conflicts = [];

    //verifica mesma linha
    var line = [];
    for (var i = 0; i < individuo.length; i++) {
        if (typeof line[individuo[i]] == "undefined") line[individuo[i]] = 0;
        line[individuo[i]]++;
        if (line[individuo[i]] > 1) {
            if (typeof conflicts[individuo[i]] == "undefined") conflicts[individuo[i]] = 0;
            conflicts[individuo[i]]++;
        }
    }

    //verifica diagonal principal
    var digP = [];
    for (var i = 0; i < individuo.length; i++) {
        var j = individuo[i];

        if (typeof digP[i + j] == "undefined") digP[i + j] = 0;
        digP[i + j]++;

        if (digP[i + j] > 1) {
            if (typeof conflicts[i] == "undefined") conflicts[j] = 0;
            conflicts[j]++;
        }

    }

    //verifica diagonal secundaria
    var digS = [];
    var x = 0;
    for (var i = individuo.length - 1; i >= 0; i--) {
        var j = individuo[i];
        if (typeof digS[x + j] == "undefined") digS[x + j] = 0;
        digS[x + j]++;

        if (digS[x + j] > 1) {
            if (typeof conflicts[i] == "undefined") conflicts[j] = 0;
            conflicts[j]++;
        }
        x++;
    }

    var count = 0;
    for (var i = 0; i < conflicts.length; i++) {
        if (typeof conflicts[i] == "undefined") conflicts[i] = 0;
        count += conflicts[i];
    }

    return conflicts;
}





function buscaComRetrocesso(n) {
    var populacao = [];
    var total = 0;
    var iteracoes = 0;

    //Geração da população inicial
    for (var i = 0; i < n; i++) {
        var individuo = [];
        for (var j = 0; j < n; j++) {
            individuo[j] = geraRandom(0, n - 1);
        }
        populacao[i] = {
            individuo: individuo,
            avaliacao: -1,
        };
        total++;
    }

    var alg = function(){
        //Avalia individuos
        for (var i = 0; i < populacao.length; i++) {
            if (populacao[i].avaliacao == -1) {
                populacao[i].avaliacao = avaliarIndividuo(populacao[i].individuo);
                if (populacao[i].avaliacao == 0) {
                    var result = "Achou [";
                    for (var j = 0; j < populacao[i].individuo.length - 1; j++) {
                        result += populacao[i].individuo[j] + ", ";
                    }
                    result += populacao[i].individuo[j] + "], dentre uma populacao de "+total+" individuos.";
                    printIndividuo(populacao[i].individuo);
                    echo(result);
                    echo("Em "+iteracoes+" iteracoes.");
                    echo("-------------------------------");
                    window.clearInterval(interval);
                }
            }
        }
        populacao.sort(function (a, b) {
            return a.avaliacao - b.avaliacao;
        });

        var novaPopulacao = [];
        var lim = limite? n-1 : populacao.length - 1;
        for (var i = 0; i < lim;) {
            var kid = {
                individuo: mutacao(crossOver(populacao[i++].individuo, populacao[i++].individuo)),
                avaliacao: -1,
            }
            novaPopulacao.push(kid);
            total++;
        }
        populacao = novaPopulacao.concat(populacao);
        iteracoes++;
    };
    var interval = setInterval(alg, 0);
}
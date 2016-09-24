/**
 * Created by Francisco on 28/02/2016.
 */

var n = 5;

function printIndividuo(individuo){
    clearMap();
    for(var z = 0; z < individuo.length; z++) {
        print({y:z, x:individuo[z]}, 'red');
    }
}

function print(pos, color){
    if (typeof color == 'undefined') {
        color = "white";
    }
    var id = "#x"+pos.x+"y"+pos.y;
    $(id).css('background-color', color);
    return true;
}
function printMap(map){
    for(var i = 0; i < map.length; i++){
        for(var j = 0; j < map[i].length; j++){
            var pos = {x:i,y:j}
            var id = "x"+pos.x+"y"+pos.y;
            $("#myMap").append("<div id='"+id+"' class='myPos'>{"+pos.x+","+pos.y+"}</div>");
            print(pos);
        }
        $("#myMap").append('<div class="line"></div>');
    }
    return true;
}
function clearMap(){
    n = parseInt($("#n").val());

    $("#myMap").html("");
    var map = [];
    for(var i = 0; i < n; i++){
        map[i] = [];
        for(var j = 0; j < n; j++){
            map[i][j] = 0;
        }
    }
    printMap(map);

}
function echo(text){
    $("#results").append(text+"\n");
}

'use strict';

window.onload = function( lvl ){
    loadGame();
    document.getElementById('countOfMoney').innerHTML = gold;
    document.getElementById('DPS').textContent = DPS;
    setHeatlh(maxValueOfHpCreep , maxValueOfHpCreep ,`level${lvl}`);
}

window.addEventListener('keydown' , function( e ){
    if(e.code === 'F4'){
        saveGame();
    }
});

function saveGame(){
    let gameSaves = {
        gold ,
        DPS ,
        lvl ,
        maxValueOfHpCreep ,
    }
    localStorage.setItem('gameSaves' , JSON.stringify(gameSaves));
}

function loadGame(){
    let savedGame = JSON.parse(localStorage.getItem('gameSaves'))
    if(typeof savedGame.gold !== 'undefined'){gold = savedGame.gold }
    if(typeof savedGame.DPS !== 'undefined'){DPS  = savedGame.DPS }
    if(typeof savedGame.lvl !== 'undefined'){lvl = savedGame.lvl }
    if(typeof savedGame.maxValueOfHpCreep !== 'undefined'){maxValueOfHpCreep = savedGame.maxValueOfHpCreep }

}


setInterval(function(){
    saveGame();
} , 30000);
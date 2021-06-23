'use strict';
let lvl = JSON.parse(localStorage.getItem('gameSaves'));

let maxValueOfHpCreep = 1500;

let valueOfHpCreep = maxValueOfHpCreep;

let health = document.getElementById("health")


setHeatlh(maxValueOfHpCreep , maxValueOfHpCreep , lvl );

//ставлю уровень и хп крипам 
function setHeatlh( param1 , param2 , level ){
    if( lvl === null){
        lvl = 1;
    }
        health.setAttribute('max' , param1 );
        health.setAttribute('value' , param2 );
        avatar.style.backgroundImage = `url(creeps/level${lvl}.png)`;
}


//после убийства крипа переходим на след уровень и увеличивается уровень крипа 
function attackCreep(){
    health.value -= DPS;
    if( health.value === 0){
        lvl++;
        maxValueOfHpCreep+=3000;
        console.log(maxValueOfHpCreep);
        
        setHeatlh(maxValueOfHpCreep , maxValueOfHpCreep ,`level${lvl}`);
    }
}



attack.addEventListener('click', ()=>{
    attackCreep(  );
});





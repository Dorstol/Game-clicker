'use strict';

// audio player

const audioPlays = document.getElementById('play');

const audioPause = document.getElementById('pause');

const audioVolume = document.getElementById('volume');

const audio = document.createElement('audio');

audio.src = 'music/musicStart.mpeg';
audio.volume = 0.3;

audioPlays.addEventListener('click' , function(){
    audio.play();
});
audioPause.addEventListener('click' , function(){
    audio.pause();
});
audioVolume.addEventListener('click' , function(){
    rangeVolume.classList.toggle('open');
});
rangeVolume.addEventListener('change' , function(){
    audio.volume = rangeVolume.value;
});




const avatar = document.getElementById('avatar');
let gold = 0;
let DPS = 0;

//фарм голды по клику на аватар
function powerClick( amount ){
    gold = gold + amount;
    document.getElementById('countOfMoney').innerHTML = gold;
}

avatar.addEventListener('click' , ()=>{
    powerClick( 1 );
} );

// главная функция для предметов 
function lvlFunction( cost , damage , amount , lvlOfItem){
    if(gold >= cost){
        lvlOfItem.setAttribute('bought' , true);
        lvlOfItem.classList.remove('lock');
        DPS = DPS + damage ;
        gold = gold - cost;
        document.getElementById('countOfMoney').innerHTML = gold;
        document.getElementById('DPS').textContent = DPS;
        avatar.addEventListener('click' , ()=>{
            powerClick( amount );
        } );
    }
}



item1.addEventListener('click' , ()=>{
    lvlFunction(450 , 10 , 1 , item1)
});

item2.addEventListener('click' , ()=>{
    lvlFunction(600 , 20 , 2 , item2)
});

item3.addEventListener('click' , ()=>{
    lvlFunction(1700 , 30 , 3 , item3)
});

item4.addEventListener('click' , ()=>{
    lvlFunction(4050 , 40 , 4 , item4)
});

item5.addEventListener('click' , ()=>{
    lvlFunction(2950 , 50 , 5 , item5)
});

item6.addEventListener('click' , ()=>{
    lvlFunction(3475 , 60 , 6 , item6)
});

item7.addEventListener('click' , ()=>{
    lvlFunction(2000 , 70 , 7 , item7)
});

item8.addEventListener('click' , ()=>{
    lvlFunction(3800 , 80 , 8 , item8)
});

item9.addEventListener('click' , ()=>{
    lvlFunction(2800 , 90 , 9 , item9)
});

item10.addEventListener('click' , ()=>{
    lvlFunction(4200 , 100 , 10 , item10)
});










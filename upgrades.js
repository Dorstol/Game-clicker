'use strict';
let timer = null;
let interval = null;

//пассивно капает 1 голда
btn1.addEventListener('click' , function(){
   if( item1.hasAttribute('bought') ){
      gold-=200;
      document.getElementById('countOfMoney').innerHTML = gold;
      setInterval( function(){
         gold+=1
         document.getElementById('countOfMoney').innerHTML = gold;
      } , 1000);
   }
});


//мгновенно снимает крипу 200 хп
btn2.addEventListener('click' , function(){
   if( item5.hasAttribute('bought') ){
      gold-=700;
      document.getElementById('countOfMoney').innerHTML = gold;
      maxValueOfHpCreep-= 200;
      health.setAttribute('value' , maxValueOfHpCreep );
   }
});

// увеличивает х2 DPS на 10 секунд 
btn3.addEventListener('click', function(){
   if( item6.hasAttribute('bought') ){
      gold-=1000;
      document.getElementById('countOfMoney').innerHTML = gold;
      timer = setTimeout( ()=>{
         DPS = DPS * 2
         document.getElementById('DPS').textContent = DPS;
         setTimeout( ()=>{
            DPS = DPS / 2;
            document.getElementById('DPS').textContent = DPS;
            clearTimeout(timer);
         }, 10000);
      } , 100 );
   }
});

// увеличивает колличество золота в минуту
btn4.addEventListener('click', function(){
   if( item6.hasAttribute('bought') ){
      gold-=1400;
      document.getElementById('countOfMoney').innerHTML = gold;
      clearInterval(interval);
      setInterval( function(){
         gold+=5;
         document.getElementById('countOfMoney').innerHTML = gold;
      }, 1000);
   }
});

//пассивно снимает 10хп крипу 
btn5.addEventListener('click', function(){
   if( item6.hasAttribute('bought') ){
         gold-=1900;
         document.getElementById('countOfMoney').innerHTML = gold;
            setInterval( ()=>{
         maxValueOfHpCreep -= 10;
         health.setAttribute('value' , maxValueOfHpCreep );
      },1000);
   }
});

//спавн всех 3-х рун
btn6.addEventListener('click',function(){
   if( item6.hasAttribute('bought') ){
      gold-=2000
      document.getElementById('countOfMoney').innerHTML = gold;
         bounty();
         dd();
         haste();
}
});
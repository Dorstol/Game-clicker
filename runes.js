'use strict';


function _rnd( min, max ){
	return Math.floor( Math.random() * ( max - min + 1 ) + min );
}



const bounty = function(){
    const el = document.createElement('div');
    el.classList.add('bountyR');
    el.style.height = 220 + 'px';
    el.style.width = 100 + 'px';
    el.style.backgroundImage = 'url(runes/bounty.png)';
    el.style.backgroundSize = 'contain';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.position = 'absolute';

    const coordX = _rnd( 0, window.innerWidth - 100 );
	const coordY = _rnd( 0, window.innerHeight - 220 );
	
	el.style.top = coordY + 'px';
	el.style.left = coordX + 'px';

    document.body.append( el );

    el.onclick = ()=>{ 
        event.target.remove(); 
        gold = gold + 200; 
        document.getElementById('countOfMoney').innerHTML = gold; };
}; 

setInterval( ()=>{
    bounty();
},_rnd(30000 , 100000));


const dd = function(){
    const el = document.createElement('div');
    el.classList.add('ddR');
    el.style.height = 220 + 'px';
    el.style.width = 100 + 'px';
    el.style.backgroundImage = 'url(runes/dd.png)';
    el.style.backgroundSize = 'contain';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.position = 'absolute';

    const coordX = _rnd( 0, window.innerWidth - 100 );
	const coordY = _rnd( 0, window.innerHeight - 220 );
	
	el.style.top = coordY + 'px';
	el.style.left = coordX + 'px';

    document.body.append( el );

    el.onclick = ()=>{ 
        event.target.remove(); 
        gold = gold * 2; 
        document.getElementById('countOfMoney').innerHTML = gold; };
}; 

setInterval( ()=>{
    dd();
},_rnd(100000 , 150000));


const haste = function(){
    const el = document.createElement('div');
    el.classList.add('hasteR');
    el.style.height = 220 + 'px';
    el.style.width = 100 + 'px';
    el.style.backgroundImage = 'url(runes/haste.png)';
    el.style.backgroundSize = 'contain';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.position = 'absolute';

    const coordX = _rnd( 0, window.innerWidth - 100 );
	const coordY = _rnd( 0, window.innerHeight - 220 );
	
	el.style.top = coordY + 'px';
	el.style.left = coordX + 'px';

    document.body.append( el );

    el.onclick = ()=>{ 
        event.target.remove(); 
        gold = gold + 400;
        document.getElementById('countOfMoney').innerHTML = gold; };
    }


setInterval( ()=>{
    haste();
},_rnd(100000 , 200000));

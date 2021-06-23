 'use strict';

     let loadScr = document.createElement('button');
     loadScr.style.height = 50 + 'px';
     loadScr.style.width = 150 + 'px';
     loadScr.style.backgroundColor = 'transparent';
     loadScr.style.position = 'absolute';
     loadScr.style.top = '80%';
     loadScr.style.border = 'none';
     loadScr.style.backgroundImage = 'url(images/play.png)';
     loadScr.style.backgroundSize = 'cover';
     loadScr.style.backgroundPositionY = -50+ 'px';
    


 setTimeout(()=>{
     loadScreen.append( loadScr );
 } , 2000);

 loadScr.addEventListener('click' , function(){
     loadScreen.remove();
 });
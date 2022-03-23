
let colors = ["#8a2be2","#e2872c" ,"#2ce25a","#2c87e2","#e22cb5","#e22c2c","#e2e22c","#e2e22c","#e2872c","#2ce25a","#e22c87","#2ce2b5","#8a2be2","#e2872c" ,"#2ce25a","#2c87e2","#e22cb5","#e22c2c","#e2e22c","#e2e22c","#e2872c","#2ce25a","#e22c87","#2ce2b5"];

let clickButton = document.querySelector('.banner');

let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');
let color= 0;
clickButton.addEventListener( "click" , function(){
   
    if( colors.length >= 0){
        firstBox.style.backgroundColor = colors[color];
        color = color + 1;
    }
  
});
let color2 = 0;
secondBox.addEventListener( "mouseover" , function(){
    
    if(colors.length >=0){
        secondBox.style.backgroundColor = colors[color2];
        color2 = color2 + 1;
        
    }
        
 
  
});

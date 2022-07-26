let display = document.querySelector(".display");
let allBts = document.querySelectorAll("button");
let initialValue = 0;


function handleBtnClick( event ) {
   display.innerText += event.target.innerText;
   if ( event.target.classList.contains("equal"))
   {
       display.innerText = eval(display.innerText);
       return;
   }
   if( event.target.classList.contains("reset")){
       display.innerText = initialValue;
       return;
   }
}


allBts.forEach( (btn) => { 
    btn.addEventListener("click" , handleBtnClick);
    
});

display.innerText = initialValue;
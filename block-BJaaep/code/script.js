// 1. select the small boxes because we want to click them 
// 2. when we click they should show number, addeventlistener (click)-> show number, then disappear
let smallBoxes = document.querySelectorAll(".first li");
let BoxeSecond = document.querySelector(".second");

smallBoxes.forEach( (box , index) => {
    box.addEventListener("click", (event) => {
        console.log(event.target);
        event.target.innerText = index + 1 ;
        setTimeout( () => {
            event.target.innerText = "";
        }, 5000);
    });
});

BoxeSecond.addEventListener( "click" , ( event ) => {
 let text = event.target.dataset.text;
  event.target.innerText = text;
        setTimeout( () => {
            event.target.innerText = "";
        }, 5000);
});

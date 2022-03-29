// 1. select the small boxes because we want to click them 
// 2. when we click they should show number, addeventlistener (click)-> show number, then disappear
let smallBoxes = document.querySelectorAll(".first li");

smallBoxes.forEach( (box) => {
    box.addEventListener("click", (event) => {
        console.log(event.target);
    });
});
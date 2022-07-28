// let inputText = document.querySelector("#text");
// let select = document.querySelector("#gender");
// let terms = document.querySelector("#terms");

// let userInfo = {};

// function handleKey( event ){
//     userInfo.email = event.target.value;
    

// }
// function clickfn(event){
//     userInfo.gender = event.target.value;

// }
// function termsfxn(event){
//     userInfo.terms = event.target.checked;
// }

// inputText.addEventListener("input", handleKey);
// select.addEventListener("input" , clickfn);
// terms.addEventListener("input",termsfxn)


// let form = document.querySelector("form");
// let userInfo = {};

// function submitform(event){
//     event.preventDefault();
//     userInfo.email = form.elements.email.value;
//     userInfo.gender = form.elements.gender.value;
//     userInfo.checkbox = form.elements.checkbox.checked;
// }

// form.addEventListener("submit",submitform);

let form = document.querySelector("form");
let modal = document.querySelector("modal");

let userInfo = {};

function submitForm( event ){

    event.preventDefault();

    console.log(event.target.elements.name.value);

    userInfo.name = event.target.elements.text.value;
    userInfo.email = event.target.elements.email.value;
    userInfo.gender = event.target.elements.gender.value;
    userInfo.color = event.target.elements.color.value;
    userInfo.range = event.target.elements.range.value;
   userInfo.genre = event.target.elements.drone.value;
    userInfo.terms = event.target.elements.terms.value;

    modal.classList.add("open");

    let close = document.addEventListener("modal-close");

    close.addEventListener("click", ()=> {
        modal.classList.remove("open");
    })
}

      



form.addEventListener("submit", submitForm );
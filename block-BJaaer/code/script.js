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

let userInfo = {};

function submitForm( event ){

    event.preventDefault();

    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.fiction = form.elements.fiction.value;
    userInfo.non_fiction = form.elements.non_fiction.value;
    userInfo.adventure = form.elements.adventure.value;
    userInfo.terms = form.elements.terms.value;

      userInfo.forEach(element => {
          let li = document.createElement("li");
          li.innerText = element.value;
        
    });

}

form.addEventListener("submit", submitForm );
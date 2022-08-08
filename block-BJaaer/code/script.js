let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let modalInfo = document.querySelector(".modal_info");

let userInfo = {};


function handleSubmit(event){
    event.preventDefault();
    userInfo.name = event.target.elements.text.value;
    userInfo.email = event.target.elements.email.value;
    userInfo.gender = event.target.elements.gender.value;
    userInfo.name = event.target.elements.name.value;
    userInfo.name = event.target.elements.name.value;
    userInfo.name = event.target.elements.name.value;
    userInfo.name = event.target.elements.name.value;

    modal.classList.add("open");

    let close = document.querySelector(".modal-close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });


}
form.addEventListener("submit",handleSubmit);


function displayInfo( date = {}){
    let h1 = document.createElement("h1");
    h1.innerText = `Name : ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Name : ${data.email}`;
    let id= document.createElement("p");
    id.innerText = `Name : ${data.id}`;

    modalInfo.append(h1,email,id)


}

// let form = document.querySelector("form");
// let modal = document.querySelector("modal");

// let userInfo = {};

// function submitForm( event ){

//     event.preventDefault();

//     console.log(event.target.elements.name.value);

//     userInfo.name = event.target.elements.text.value;
//     userInfo.email = event.target.elements.email.value;
//     userInfo.gender = event.target.elements.gender.value;
//     userInfo.color = event.target.elements.color.value;
//     userInfo.range = event.target.elements.range.value;
//    userInfo.genre = event.target.elements.drone.value;
//     userInfo.terms = event.target.elements.terms.value;

//     modal.classList.add("open");

//     let close = document.addEventListener("modal-close");

//     close.addEventListener("click", ()=> {
//         modal.classList.remove("open");
//     })
// }

      



// form.addEventListener("submit", submitForm );
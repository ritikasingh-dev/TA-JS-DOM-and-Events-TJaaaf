let form = document.querySelector("form");

let usernameError = "";
let parentElm = usernameElm.parentElement;
let parentElm1 = usernameElm.parentElement;
let parentElm2= usernameElm.parentElement;
let  parentElm3= usernameElm.parentElement;
let parentElm4 = usernameElm.parentElement;

function checkForNumber( str){
   return str.split('').some(e => Number(e) );
}

function handleSubmit(event){
    event.preventDefault();
    console.dir(event.target);

    let usernameElm = event.target.elements.name;

    if(usernameElm.value === ""){
        usernameError = "cant be empty";
        // parentElm.classList.add("error");
    }
    else if (usernameElm.value.length < 5){
        usernameError = "cannot be less thann 5"
        // parentElm.classList.add("error");
    }
    else if (!checkForNumber(usernameElm.value)){
        usernameError = "cannot be withou numbers";
        // parentElm.classList.add("error");
    }
    else{
        // usernameError = "";
        // parentElm.classList.add("success");
        // parentElm.classList.remove("error");
    }
    usernameElm.nextElementSibling.innerText = usernameError;

    let usernameElm1 = event.target.elements.username;
    if(!checkForNumber(usernameElm1.value) ){
          
    }
    let usernameElm2 = event.target.elements.number;
    let usernameElm3 = event.target.elements.password;
    let usernameElm4 = event.target.elements.cpassword;


}
4
form.addEventListener("submit" , handleSubmit);

//cant be empty
//more than 5
//must have a number
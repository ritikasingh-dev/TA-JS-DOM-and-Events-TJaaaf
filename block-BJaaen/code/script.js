let userRoot = document.querySelector(".user-icons");
let compRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".resuly");

let dataSet = [
    {
        name : "rock",
        beats : "scissor",
    },
    {
        name : "paper",
        beats : "rock",
    },
    {
        name : "scissor",
        beats : "paper",
    },

];

function createUserLayout (){

    dataSet.forEach((icon) => {
        userLayout = " ";
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;

        li.addEventListener("click", ()=>{
          userSelected = icon;
          computerSelected = dataSet[ getRandomNumber() ];
          console.log(userSelected,computerSelected);
          getWinner(userSelected,computerSelected);
          createComputerLayout();
          createUserLayout();
        });

        if( userSelected.name === icon.name){
            li.classList.add("selected");
        }

        li.append(i);
        userRoot.append(li);

    })
}

createComputerLayout();

function createComputerLayout (){

    dataSet.forEach((icon) => {
        computerLayout.innerHtml = " ";
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;

        if( userSelected.name === icon.name){
            li.classList.add("selected");
        }

        li.append(i);
        userRoot.append(li);

    })
}

createUserLayout();

let userSelected = {}, computerSelected = {};
function getRandomNumber( max = 3 ){
    return Math.floor(Math.random()* max);
 
}

function getWinner(user , computer){
    if(user.name === computer.name){
        result.innertext = "tie";
    }
    elseif(user.beats === computer.name){
        result.innertext="won";
    }
    else {
        result.innertext = "c won";
    }

}
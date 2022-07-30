let inputName = document.querySelector(`input[type = "text"]`);
let movies_list = document.querySelector(".movies_list");

console.log(inputName);

let allMovies = [
    {
        name: "forest gump",
        watched : false ,
    },
    {
        name: "forest gump",
        watched : false ,
    },
    {
        name: "forest gump",
        watched : false ,
    },
    {
        name: "forest gump",
        watched : false ,
    },
]

inputName.addEventListener('keyup' , (event) => {
    if(event.keyCode === 13){
        console.log(event.target.value);
    };
    allMovies.push(
        {
           name: event.target.value,
           watched: false ,

        }
    );
});

function creteTrmplate (){

    allMovies.forEach( (movie) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.classList.add("styled_checkbox");
        input.type = "checkbox";
        input.id = "1";

    } )
   
};
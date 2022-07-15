let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');

function generateRandomColor(){
    let hexCharacters = ['1',    
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    'a',
                    'b',
                    'c',
                    'd',
                    'e',
                    'f'];
     let color = "#";
     for(let i=0;i<6;i++){
         let randomNumber = Math.floor(Math.random() * 16);
         color = color + hexCharacters[randomColor];
     }  
     return color;             
}
function handleClick(){
    // 1. generate random color
    let randomColor = generateRandomColor();
    // 2. change background color
    firstBox.style.backgroundColor = randomColor;
}
firstBox.addEventListener("click",handleClick);
secondBox.addEventListener("mousemove",handleMouseMove)

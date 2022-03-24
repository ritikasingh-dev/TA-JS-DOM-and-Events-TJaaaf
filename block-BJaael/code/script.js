function generateRandomNumber(max){
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}
function generateRandomColor(){
    
    let hexCharacter = [
        '1',
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
        'f',
    ];
    let color = "#";
    for(let i = 0; i<6 ; i++){
      let number = generateRandomNumber(16);
      color = color + hexCharacter[number];
    }            
    return color;
}
 
let allBoxes = document.querySelector('.bigBox');

for(let i=0 ; i<500 ; i++){
    let box = document.createElement('div');
    box.classList.add("box", "flex");
    let h3 = document.createElement('h3');
    h3.innerText = generateRandomNumber(500);
    box.append(h3);
    allBoxes.classList.add('flex-wrap');
    allBoxes.append(box);

}

allBoxes.addEventListener("mousemove" , handleMouseMove);
function handleMouseMove(){
    let randomColor = generateRandomColor();
    let eachBox = document.querySelectorAll('.box');
    eachBox.forEach( box => {
        box.style.backgroundColor = generateRandomColor();
    });

    box.querySelector('h3').innerText = generateRandomNumber();
}

   


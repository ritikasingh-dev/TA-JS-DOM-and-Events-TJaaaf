const COLORS = [
    "IndianRed",
    "LightCoral",	
   " Salmon",		
   " DarkSalmon",		
    "LightSalmon"	,	
   " Crimson"	,	
    "Red",	
    "FireBrick"	,	
    "Pink",	
    'LightPink',		
    "RebeccaPurple"	,	
    "BlueViolet",	
]
let root = document.querySelector(".buttons");
let h1 = document.querySelector("h1");

COLORS.forEach( color => {
    let div = document.createElement("div");
    div.classList.add = "box";
    div.style.backgroundColor = color;
    root.append("div");
})
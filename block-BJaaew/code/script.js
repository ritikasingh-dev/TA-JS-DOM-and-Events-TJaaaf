let starks = document.querySelector("starks");
let lannisters = document.querySelector("lannisters");
let bratheons = document.querySelector("bratheons");
let targaryens = document.querySelector("targaryens");
let greyjoya = document.querySelector("greyjoya");
let tyrells = document.querySelector("tyrells");
let tullys = document.querySelector("tullys");
let redwyne = document.querySelector("redwyne");
let freys = document.querySelector("freys");
let arryns = document.querySelector("arryns");
let dothrakis = document.querySelector("dothrakis");
let root = document.querySelector("ul");




// Clicking on any of the tag should show the people only of that house
// 1.create structure using js in html
//2. when click happens , fetch data and create structure using JS

function handleStarks( got ){
    
    if(got.houses.name == "Starks"){
        // <ul class="flex no-wrap">
        // <li>
        //   <div class="starks-img"></div>
        //   <p>name: 'Eddard "Ned" Stark'</p>
        //  <p> description:
        //    "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",</p>
        //    <a class="flex item-center" href="http://gameofthrones.wikia.com/wiki/Eddard_Stark"> <button class="know-more" >know more</button></a>
        // </li>
        got.houses.people.forEach(person=> {
            let li = document.createElement("li");
            let div = document.createElement("div");
            div.classList.add("starks-img")
           
            let pName = document.createElement("p");
            pName.innerText = `Name : ${got.houses.people.person.name}`;
            let pDescription = document.createElement("p");
            pDescription.innerText =`Descriptipn : ${got.houses.people.person.description }`;
            li.append(div,pName,pDescription);
            root.append(li);
            
        });
        
    }
    
}
console.log(handleStarks());
starks.addEventListener("click", handleStarks);


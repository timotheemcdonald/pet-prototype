let petDisplay = document.getElementById("pet-display");
let petInfo = document.getElementById("pet-info");


function createPet(){
    let petName = document.getElementById("create-name").value;
    let petFood = document.getElementById("create-food").value;
    let petGame = document.getElementById("create-game").value;

    Array.from(document.getElementsByClassName('pet-name')).forEach(function(element){
        element.innerHTML = petName;
    });
    Array.from(document.getElementsByClassName('food')).forEach(function(element){
        element.innerHTML = petFood;
    })
    Array.from(document.getElementsByClassName('game')).forEach(function(element){
        element.innerHTML = petGame;
    })

    petInfo.classList.add("hide");
    petDisplay.classList.remove("hide");
};


let hunger = 0;
let hygiene = 0;
let happy = 0;

let happyScore = document.getElementById("happy-score");
happyScore.innerHTML = happy;
let hungerScore = document.getElementById("hunger-score");
hungerScore.innerHTML = hunger;
let hygieneScore = document.getElementById("hygiene-score");
hygieneScore.innerHTML = hygiene;


function play(){
    happy+=2;
    --hygiene;
    --hunger;
    document.getElementById('happy-score').innerHTML = happy;
    document.getElementById('hygiene-score').innerHTML = hygiene;
    document.getElementById('hunger-score').innerHTML = hunger;
}

function clean(){
    hygiene+=1;
    happy = happy - 0.5;
    document.getElementById('hygiene-score').innerHTML = hygiene;
    document.getElementById('happy-score').innerHTML = happy;
}

function feed(){
    hunger+=2;
    hygiene = hygiene - 0.5;
    document.getElementById('hunger-score').innerHTML = hunger;
    document.getElementById('hygiene-score').innerHTML = hygiene;
}

function displayToggle(){
    hygiene = 0;
    happy = 0;
    hunger = 0;
    document.getElementById('hunger-score').innerHTML = hunger;
    document.getElementById('hygiene-score').innerHTML = hygiene;
    document.getElementById('happy-score').innerHTML = happy;
    petInfo.classList.remove("hide");
    petDisplay.classList.add("hide");
}
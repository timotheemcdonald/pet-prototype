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
    ++happy;
    --hygiene;
    --hunger;
    document.getElementById('happy-score').innerHTML = happy;
    document.getElementById('hygiene-score').innerHTML = hygiene;
    document.getElementById('hunger-score').innerHTML = hunger;
}

function clean(){
    ++hygiene;
    --happy;
    document.getElementById('hygiene-score').innerHTML = hygiene;
    document.getElementById('happy-score').innerHTML = happy;
}

function feed(){
    ++hunger;
    hygiene = hygiene - 0.5;
    document.getElementById('hunger-score').innerHTML = hunger;
    document.getElementById('hygiene-score').innerHTML = hygiene;
}
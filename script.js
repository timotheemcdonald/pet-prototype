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

let buttonPlay = document.getElementById('#play-action');
let buttonFeed = document.getElementById('#food-action');
let buttonClean = document.getElementById('#clean');

buttonPlay.addEventListener('click', () => {

})
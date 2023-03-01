var allAnimals = ["bird", "deer", "dog", "fish", "frog", "lion", "rabbit", "tiger","bird", "deer", "dog", "fish", "frog", "lion", "rabbit", "tiger"];
var matchedPair = 0;
var clickedAnimals = [];

function displayAnimal(aid){
    var allMoves = document.getElementById("moves").innerHTML;
    allMoves++;
    document.getElementById("moves").innerHTML = allMoves;
    
}
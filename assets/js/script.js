var allAnimals = ["bird", "deer", "dog", "fish", "frog", "lion", "rabbit", "tiger","bird", "deer", "dog", "fish", "frog", "lion", "rabbit", "tiger"];
var matchedPair = 0;
var clickedAnimals = [];

function displayAnimal(aid){
    var allMoves = document.getElementById("moves").innerHTML;
    allMoves++;
    document.getElementById("moves").innerHTML = allMoves;

    if(clickedAnimals.length !=2){
        document.getElementById(aid).style.display = "block";
        var animal = document.getElementById(aid).src.split("/").pop().split(".")[0];
        document.getElementById("animal"+aid).style.pointerEvents= "none";
        clickedAnimals.push(aid);

    }
    
}

function startGame(){
    var animals = document.querySelectorAll(".animals");
    for(var a = 0; a < animals.length; a++)
    {
        var randomAnimal = allAnimals.splice(allAnimals.length * Math.random() | 0, 1)[0];
        document.getElementsByClassName("animals")[a].innerHTML += "<img id='"+a+"' src='assets/images/"+randomAnimal+".png' width='130' height='130' style='display: none;' />";
    }
}
startGame();
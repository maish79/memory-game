var allAnimals = ["bird", "deer", "dog", "fish", "frog", "lion", "rabbit", "tiger","bird", "deer", "dog", "fish", "frog", "lion", "rabbit", "tiger"];
var matchedPair = 0;
var clickedAnimals = [];

function displayAnimal(aid)
{   
    var allMoves = document.getElementById("moves").innerHTML;
    allMoves++;
    document.getElementById("moves").innerHTML = allMoves;

    if(clickedAnimals.length !=2)
    {
        document.getElementById(aid).style.display = "block";
        var animal = document.getElementById(aid).src.split("/").pop().split(".")[0];
        document.getElementById("animal"+aid).style.pointerEvents= "none";
        clickedAnimals.push(aid);
    
        if(clickedAnimals.length ==2)
        {  
             if(document.getElementById(clickedAnimals[0]).getAttribute("src") == document.getElementById(clickedAnimals[1]).getAttribute("src"))
            { 
                matchedPair++;
               
                setTimeout(function(){
                    clickedAnimals = [];
                   alert('you have a match');
                }, 500);
               
                if(matchedPair == 8){
                    setTimeout(function(){
                    alert('Congradulations, you win');
                    document.getElementById("restartScreen").style.display = "block";
                }, 500);
                }
            }else{
            
                setTimeout(function(){
                    document.getElementById(clickedAnimals[0]).style.display = "none";
                    document.getElementById(clickedAnimals[1]).style.display = "none";
                    document.getElementById("animal"+clickedAnimals[0]).style.pointerEvents = "auto";
                    document.getElementById("animal"+clickedAnimals[1]).style.pointerEvents = "auto";
                    clickedAnimals= [];
                   //alert('sorry, try again!');
                },500);
            }
        }

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
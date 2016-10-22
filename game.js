var randomNumber = 0; 
var scoreboard = 0; 
var wins = 0; 
var losses = 0; 
var crystalValues = [1,2,3,4,5,6,7,8,9]
var userTotal = 0; 


function startGame() {
	scoreboard=0; 
	randomNumber = Math.floor(Math.random()*50)+11; 
	crystalValues = Math.floor(Math.random()*18)+1; 
}
for (var i = 0; i < crystalValues.length; i++) {
	crystalValues[i]

	if (randomNumber>userTotal) {

		console.log("Keep trying")

	}
	else if (randomNumber==userTotal) {

		console.log("Winner, Winner, Chicken Dinner")
	}

	else (userTotal>randomNumber){
		console.log("Close, but no cigar")
	}

	$(".randomNumber").html(randomNumber); 
	$(".scoreboard").html("Wins: " + "Losses: ")




}

function playGame(){

	$(".thumbnail").on("click", function(){


	})

}
playGame(); 
/* Guess Advanced: Merit Badge 3
 * by Ailsa
 */
var games = 0;
var totalTurns = 0;
var again = true;
while (again == true && guess != "q"){
	games++;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	var guess = 0;
	var turns = 0;
	while (guess != answer && guess != "q"){
		guess=prompt("Guess a number (1-100)");
		if (guess=="q") break;
		if (validator(guess)==true){
			turns++
			if (guess<answer) alert("Too low");
			else if (guess>answer) alert("Too high");
		}
		else alert("invalid guess. try again");
	} 
	if (guess==answer){
		gameStats();
		again = newGame();
	}
	else alert("You quit");
}
function validator(guess){
	if (guess > 0 && guess < 101) return true;
	else return false;
}
function gameStats(){
	alert("You guessed it in " +turns+ " turns");
	totalTurns = totalTurns + turns;
	averageTurns = totalTurns/games;
	alert("You won " +games+ " games with an average of " +averageTurns+ " turns per game");
}
function newGame(){
	again = confirm("Would you like to play again?");
	if (again==false) alert("Thank you for playing");
	else return true;
}

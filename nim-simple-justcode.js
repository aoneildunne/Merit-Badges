count = 0;
turn = 0;
winner = null;
while(count < 21){
   if(count < 21){
	cpuTurn();
   }
   if(count < 21){
       playerTurn();
   }
}
alert(" winner is " +winner+ " ");
function playerTurn(){
  winner = "cpu";
  turn = parseInt(prompt("how many do you count"));
  count+=turn;
  alert("count is now " +count+ " .");
  return turn;
}
function cpuTurn(){
   winner = "player";
   turn = Math.floor(Math.random()*3)+1;
   count+=turn;
   alert("computer counts " +turn+ " and count is now " +count+ " .");
   return turn;
 }

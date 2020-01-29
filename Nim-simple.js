/* Nim Super Simple */

/* Globals 
count = 0
 * count = integer, winner = String
 */ 
 count = 0;
 turn = 0;
 winner = null;
 /* Main Code 
  * loop while count <21
  * if count < 21 call cpuTurn, adding to count and alerting count. Set winner as player. 
  * if count < 21 call playerTurn, adding to count and alerting count. Set winner as CPU.
  * end loop
  * alert winner
  */
  while(count < 21){
	  if(count < 21){
		  cpuTurn();
		  }
    if(count < 21){
      playerTurn();
    }
  }
  alert("winner is " +winner+ " ");
  
/* playerTurn
 * set winner as CPU
 * prompt for turn (1-3)
 * @param none
 * @return turn (integer)
 */
function playerTurn(){
	winner = "cpu";
	turn = parseInt(prompt("how many do you count?"));
  count+=turn;
  alert("count is now " +count+ " .");
  return turn;
}
/* cpuTurn
 * set winner as player
 * set turn as random number 1-3
 * alert CPU's turn
 * return turn
 */
 function cpuTurn(){
	 winner = "player";
	 turn = Math.floor(Math.random()*3)+1;
   count+=turn;
	 alert("computer counts " +turn+ " and count is now " +count+ " .");
   return turn;
 }

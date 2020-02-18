const result = document.querySelector('.result')
const choices = document.querySelector('.choices')
const submitRps = document.querySelector('.submit-rps')
const rps = document.getElementsByName('rps')


//get the player choice

function getPlayerChoice() {
  
    for (i=0; i < rps.length; i++) {
        if (rps[i].checked){
      playerChoice = rps[i].value
            }
        }
    return playerChoice
     } 

     //get the computer choice 

function getcomChoice(){

let comChoice = Math.random()

if (comChoice <= .33) {
 comChoice = "rock"
}
else if (comChoice  > .33 && comChoice <= .67  ) {
  comChoice = "scissors"
      } 
else if(comChoice > .67){
    comChoice = "paper"
}
return comChoice
} 
                
// Get values on click and compare


  
submitRps.addEventListener('click', function(){

    let choice1 = getcomChoice()
    let choice2 = getPlayerChoice()
         
    function compare () {
      if (choice1 === choice2) {
      return "Tie"
   } else if(choice1 === 'rock') {
           if (choice2 === 'scissors'){
                return "Computer Wins"
            } else if (choice2 === 'paper') {
                return "Player Wins"
            }
   }  else if (choice1 === 'scissors') {
           if (choice2 === 'paper'){
           return "Computer Wins"
        } else if (choice2 === 'rock' ) {
            return "Player Wins"
                } 
   }  else if (choice1 === 'paper') {
       if (choice2 === 'rock') {
       return "Computer Wins"
    }   else if (choice2 === 'scissors' ) {
        return "Player Wins"
       }
      }
      
}

choices.textContent = `Computer chooses ${choice1}, Player chooses ${choice2}.`
result.textContent = compare()  
console.log(compare())
return compare
 })




// Output win/loose
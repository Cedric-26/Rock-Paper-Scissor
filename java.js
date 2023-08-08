function getComputerChoice()
{
    let x= (Math.floor(Math.random()*3) +1 )

        switch (x)
        {
            case 1:
                return("Rock");
                break;
            case 2:
                return("Paper");
                break;
                case 3:
                    return("Scissor");
                    break;             
        } 

}
function playRound(playerSelection, computerSelection)
{
  
  switch(playerSelection)
  {
    case playerSelection =="Paper" && computerSelection =="Rock" :
        console.log(" You win, Paper beats Rock");
        break;
    case playerSelection =="Paper" && computerSelection =="Paper" :
        console.log(" This is a draw");
        break;
    case playerSelection =="Rock" && computerSelection =="Paper" :
            console.log(" You lose! Paper beats Rock");
        break;
    case playerSelection =="Rock" && computerSelection =="Rock" :
            console.log(" This is a draw");
        break;
    case playerSelection =="Rock" && computerSelection =="Scissor" :
                console.log(" You Win! Rock beats Scissors");
        break;
    case playerSelection =="Scissor" && computerSelection =="Rock" :
            console.log(" You Lose! Rock beats Scissors");
         break;
    case playerSelection =="Scissor" && computerSelection =="Scissor" :
            console.log(" This is a draw");
        break;
    case playerSelection =="Paper" && computerSelection =="Scissor" :
            console.log(" You Lose! Scissors beats paper");
        break;
    case playerSelection =="Scissor" && computerSelection =="Paper" :
            console.log(" You Win! Scissors beats paper");
        break;
    default:
        alert("Your choice was invalid");
  }
  

}
    let playerSelection=parseInt(prompt("Enter your choice")); 
    const computerSelection= getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

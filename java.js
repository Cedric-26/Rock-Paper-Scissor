let a= "rock";
let b= "paper";
let c= "scissor";
function getComputerChoice()
{
    let x= (Math.floor(Math.random()*3) +1 )


        switch (x)
        {
            case 1:
                return(a);
                break;
            case 2:
                return(b);
                break;
                case 3:
                    return(c);
                    break;             
        } 

}
function playRound(playerSelection, computerSelection)
{
  
  switch(playerSelection)
  {
    case playerSelection.toLowerCase == b && computerSelection == a :
        console.log(" You win, Paper beats Rock");
        break;
    case playerSelection.toLowerCase ==b && computerSelection == b:
        console.log(" This is a draw");
        break;
    case playerSelection.toLowerCase == a && computerSelection.toLowerCase == b:
            console.log(" You lose! Paper beats Rock");
        break;
    case playerSelection.toLowerCase == a && computerSelection.toLowerCase == a :
            console.log(" This is a draw");
        break;
    case playerSelection.toLowerCase == a && computerSelection.toLowerCase == c:
                console.log(" You Win! Rock beats Scissors");
        break;
    case playerSelection.toLowerCase == c && computerSelection.toLowerCase == a :
            console.log(" You Lose! Rock beats Scissors");
         break;
    case playerSelection.toLowerCase =="Scissor" && computerSelection.toLowerCase =="Scissor" :
            console.log(" This is a draw");
        break;
    case playerSelection.toLowerCase =="Paper" && computerSelection.toLowerCase =="Scissor" :
            console.log(" You Lose! Scissors beats paper");
        break;
    case playerSelection.toLowerCase =="Scissor" && computerSelection.toLowerCase =="Paper" :
            console.log(" You Win! Scissors beats paper");
        break;
    default:
        alert("Your choice was invalid");
  }
  

}
    const playerSelection=parseInt(prompt("Enter your choice")); 
   
    let computerSelection= getComputerChoice();
    
    playRound(playerSelection, computerSelection);

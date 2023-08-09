let rock= "rock";
let paper= "paper";
let scissor= "scissor";
function getComputerChoice()
{
    let x= (Math.floor(Math.random()*3) +1 )


        switch (x)
        {
            case 1:
                return(rock);
                break;
            case 2:
                return(paper);
                break;
                case 3:
                    return(scissor);
                    break;             
        } 

}
function playRound(playerSelection, computerSelection)
{
    if(playerSelection == computerSelection)
    {
        console.log("It is a draw");
    }
    else if(playerSelection =="paper" && computerSelection == rock )
    {
        console.log("You win, Paper beats Rock");
    }
    else if(playerSelection === 'rock' && computerSelection === paper)
    {
        console.log("You lose! Paper beats Rock");
    }
    else if(playerSelection === 'rock' && computerSelection === scissor)
    {
        console.log("You Win! Rock beats Scissors");
    }
    else if(playerSelection === 'scissor' && computerSelection === rock)
    {
        console.log(" You Lose! Rock beats Scissors");
    }
    else if(playerSelection === 'paper' && computerSelection === scissor)
    {
        console.log(" You Lose! Scissors beats paper");
    }
    else if(playerSelection === 'scissor' && computerSelection === paper)
    {
        console.log("You Win! Scissors beats paper");
    }
    else
    {
        console.log("Your Choice was invalid")
    }
}
    let playerSelection1=parseInt(prompt("Enter your choice")); 
    let playerSelection= playerSelection1.toLowerCase;
    let computerSelection= getComputerChoice();
    
    playRound(playerSelection, computerSelection);

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
        return("It is a draw");
    }
    else if (playerSelection =="paper")  
    {
        if(computerSelection == 'rock' )
        {
        return("You win, Paper beats Rock");
        }
    }
    else if(playerSelection === 'rock' && computerSelection === paper)
    {
        return("You lose! Paper beats Rock");
    }
    else if(playerSelection === 'rock' && computerSelection === scissor)
    {
        return("You Win! Rock beats Scissors");
    }
    else if(playerSelection === 'scissor' && computerSelection === rock)
    {
        return(" You Lose! Rock beats Scissors");
    }
    else if(playerSelection === 'paper' && computerSelection === scissor)
    {
        return(" You Lose! Scissors beats paper");
    }
    else if(playerSelection === 'scissor' && computerSelection === paper)
    {
        return("You Win! Scissors beats paper");
    }
    else
    {
        return("Your Choice was invalid")
    }
}
    
function game()
{
    let playerWins=0;
    let computerWins=0;
    let draw=0;
    for (let i=0; i<=4; i++)
    {
        let playerSelection=(prompt("Enter your choice")).toLowerCase(); 
        let computerSelection= getComputerChoice();
    
        console.log(playRound(playerSelection, computerSelection));

        if (playRound(playerSelection, computerSelection) === "You win, Paper beats Rock" || 
        playRound(playerSelection, computerSelection) === "You win, Rock beats Scissors" ||
        playRound(playerSelection, computerSelection) === "You win, Scissors beats paper")
        {
            playerWins +=1;
        }
        else if (playRound(playerSelection, computerSelection) === "You lose! Paper beats Rock" ||
        playRound(playerSelection, computerSelection) === "You Lose! Rock beats Scissors" ||
        playRound(playerSelection, computerSelection) === "You Lose! Scissors beats paper" )
        {
            computerWins +=1;
        }
        else
        {
            draw +=1;
        }
    }
    if (playerWins > computerWins || playerWins > draw)
    {
        alert("Congratulations! you won");
    }
    else if (computerWins > playerWins || computerWins > draw)
    {
        alert("Bummer the computer won");
    }
    else if (draw > playerWins || computerWins < draw)
    {
        alert("This is an overall draw");
    }
}
game();
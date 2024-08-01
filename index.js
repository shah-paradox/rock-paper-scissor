// Variable declaration
let computerScore=0;
let playerScore=0;

//Function declaration
function getHumanName()
{
    //Enter player name
    playerName = prompt("My name is: ");
    return playerName;
}

function getHumanChoice()
{
    let playerChoice = (prompt("Enter rock or paper or scissor")).toLowerCase();
    if(playerChoice==="rock")
        return 0;
    if(playerChoice==="paper")
        return 1;
    if(playerChoice==="scissor")
        return 2;
}

function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}
function playRound()
{
    let computerChoice=getComputerChoice;
    let humanChoice=getHumanChoice();
    if(humanChoice===computerChoice)
    {
        alert("Draw");
        return;
    }
    if(computerChoice===0)
    {
        
        if(humanChoice===1)
        {
            alert(`Congrats ${playerName}, you won!`);
            playerScore++;
        }
        if(humanChoice===2)
        {
            alert(`Congrats ${playerName}, you lost!`);
            computerScore++;
        }
    }
    if(computerChoice===1)
    {
        
        if(humanChoice===2)
        {
            alert(`Congrats ${playerName}, you won!`);
            playerScore++;
        }
        if(humanChoice===0)
        {
            alert(`Congrats ${playerName}, you lost!`);
            computerScore++;
        }
    }
    if(computerChoice===2)
    {
        
        if(humanChoice===0)
        {
            alert(`Congrats ${playerName}, you won!`);
            playerScore++;
        }
        if(humanChoice===1)
        {
            alert(`Congrats ${playerName}, you lost!`);
            computerScore++;
        }
    }
}

function playGame()
{
    for(let i =0; i<5;i++)
    {
        playRound();
    }
}

// Welcome message
alert("Hi. Please enter your name");
const playerName=getHumanName();

playGame();


//Output score    



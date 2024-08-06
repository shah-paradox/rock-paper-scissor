

let humanScore=0, computerScore=0;



// Take user input
function userInput(){
    let input=prompt("Enter rock, paper or scissor");
    input=input.toLowerCase();
    return input;

}

//Take computerinput
function computerInput(){
    let temp = Math.floor(Math.random() * 3);// 0: rock, 1:paper, 2:scissor
    if(temp==0)
        return "rock"
    else if (temp==1)
        return "paper"
    else if (temp==2)
        return "scissor"
}

//Battle
function battle(computerChoice,userChoice){
    console.log(`You played ${userChoice}`);
    console.log(`The computer played ${computerChoice}`);
    if(computerChoice==userChoice)
        return "tie";
    if(computerChoice=="rock")
    {
        if(userChoice=="paper")
            return "user";
        if(userChoice=="scissor")
            return "computer"
    }
    if(computerChoice=="paper")
    {
        if(userChoice=="rock")
            return "computer";
        if(userChoice=="scissor")
            return "user"
    }
    if(computerChoice=="scissor")
    {
        if(userChoice=="paper")
            return "computer";
        if(userChoice=="rock")
            return "user"
    }
}



//Function for a single round
function playRound(){

    //Takes computer input and human input
    let computerChoice=computerInput();
    let userChoice=userInput();
    
    //Compares them and updates score accordingly
    let result = battle(computerChoice, userChoice);
    if(result=="computer")
    {   
        console.log("Computer wins");
        computerScore++;
    }
    else if(result=="user")
    {
        console.log("User wins");
        humanScore++;
    }
    else if(result=="tie")
    {
        console.log("Its a tie");
    }

}
   



// main

// Function that plays entire game
function playGame()
{
    //plays a round five times 
    for(let i =0;i<5;i++)
    {
        playRound();
    }
    //Check who won and display message
    if(humanScore>computerScore)
    {
        alert("You win");
    }
    else if(humanScore<computerScore)
    {
        alert("Computer wins");
    }
    else
    {
        alert("Its a tie");
    }
}

    


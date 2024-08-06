

let humanScore=document.querySelector(".playerScore");
let computerScore=document.querySelector(".compScore");



// Take user input
function userInput(){
    const options=document.querySelector(".options");
    //Add rock paper and scissors as options
    const rock=document.createElement("button");
    rock.textContent="ROCK";
    const paper=document.createElement("button");
    paper.textContent="PAPER";  
    const scissor=document.createElement("button");
    scissor.textContent="SCISSOR";
    options.appendChild(rock);
    options.appendChild(paper);
    options.appendChild(scissor);
    //Check wich button clicked
    flag= true;
    while(flag)
    {
        rock.addEventListener("click",()=>{return "rock";});
        paper.addEventListener("click",()=>{return "paper";});
        scissor.addEventListener("click",()=>{return "scissor";});
    }
    

    // deleteOptions

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

    //debugging
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
   

//Check button pressed
const buttonPlayRound=document.querySelector(".playRound");
buttonPlayRound.addEventListener("click",playRound);



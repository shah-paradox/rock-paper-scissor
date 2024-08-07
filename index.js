

let humanScore=document.querySelector(".playerScore");
let computerScore=document.querySelector(".compScore");
let humanCount=0;
let compCount=0;

// Take user input
function userInput(){
    const options=document.querySelector(".options");
    //Add rock paper and scissors as options
    const rock=document.createElement("button");
    rock.textContent="ROCK";
    rock.classList.add("rock");
    const paper=document.createElement("button");
    paper.textContent="PAPER"; 
    paper.classList.add("paper"); 
    const scissor=document.createElement("button");
    scissor.textContent="SCISSOR";
    scissor.classList.add("scissor");
    options.appendChild(rock);
    options.appendChild(paper);
    options.appendChild(scissor);
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
function playRound(thisUserInput){

    //Takes computer input and human input
    let computerChoice=computerInput();
    let userChoice=thisUserInput;
    
            //Compares them and updates score accordingly
        let result = battle(computerChoice, userChoice);
        if(result=="computer")
        {   
            console.log("Computer wins");
            compCount++;
            computerScore.textContent=compCount;
        }
        else if(result=="user")
        {
            console.log("User wins");
            humanCount++;
            humanScore.textContent=humanCount;
        }
        else if(result=="tie")
        {
            console.log("Its a tie");
        }
    // IF any score reaches 5
    if(compCount==5 || humanCount==5)
    {
        //disply winning message
        if(compCount==5)alert("computer won");
        else if(humanCount==5)alert("User won");
       
    }
    

}
   

//Check button pressed
const buttonPlayRound=document.querySelector(".playRound");
buttonPlayRound.addEventListener("click",()=>{
    userInput();
    const buttons =document.querySelector(".options");
    buttons.addEventListener("click",(e)=>{
            playRound(e.target.className);
            
    });
});


    



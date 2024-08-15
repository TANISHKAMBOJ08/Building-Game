let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currMode = "light";
modeBtn.addEventListener("click", ()=> {//mouseover
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.innerText = "Light Mode";

    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modeBtn.innerText = "Dark Mode";
    }
})

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {  
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    //Generate computer choice;
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissor
           userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
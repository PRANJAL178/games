let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let a = document.querySelector("#a");
let users=document.querySelector("#us");
let comps=document.querySelector("#cs");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {                        //defining function
        const userchoice = choice.getAttribute("id");
        console.log("user choice=", userchoice);                          //printing user's choice
        let compchoice = compch();
        let win = true;
        if (userchoice === compchoice) 
        {
            drawgame();
        }
        else if (userchoice == "rock") {
            win = compchoice === "scissors" ? true : false;
            check(win,compchoice,userchoice);
        }
        else if (userchoice == "scissors") {
            win = compchoice === "paper" ? true : false;
            check(win,compchoice,userchoice);
        }
        else {
            win = compchoice === "rock" ? true : false;
            check(win,compchoice,userchoice);
        }
    });
});
const check = (win,compchoice,userchoice) => {
    if (win === true) {
        userscore++;
        users.innerText=userscore;
        a.innerText = "Congratulations! you win. Your "+userchoice+" beats "+compchoice
        a.style.backgroundColor = "green"
    }
    else {
        compscore++;
        comps.innerText=compscore;
        a.innerText = "you lose..try again!. "+compchoice+" beats your "+userchoice
        a.style.backgroundColor="red"
    }
}
const drawgame = () => {
    console.log("game was draw");
    a.innerText = "game was draw"
    a.style.backgroundColor="yellow"
    a.style.color="black"
}
const compch = () => {
    let idx = Math.floor(Math.random() * 3);
    let option = ["rock", "paper", "scissors"];
    let comp = option[idx];
    console.log("comp choice", comp);                         //printing computer's choice
    return (comp);
}

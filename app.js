const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
let userScore = 0;
let computerScore = 0;

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") { return "Rock" };
    if (letter === "p") { return "Paper" };
    if (letter === "s") { return "Scissors" };
}

function win(userChoice, compChoice) {
    const defineUserPlayer = "user".fontsize(4).sub();
    const defineCompPlayer = "computer".fontsize(4).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${defineUserPlayer} beats  ${convertToWord(compChoice)}${defineCompPlayer}. You win! 🔥`;
    userChoiceDiv.classList.add('greenGlow');
    setTimeout(() => userChoiceDiv.classList.remove('greenGlow'), 300);
}

function lose(userChoice, compChoice) {
    const defineUserPlayer = "user".fontsize(4).sub();
    const defineCompPlayer = "computer".fontsize(4).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${defineUserPlayer} beats  ${convertToWord(compChoice)}${defineCompPlayer}. You lose... 💣`;
    userChoiceDiv.classList.add('redGlow');
    setTimeout(() => userChoiceDiv.classList.remove('redGlow'), 300);
}

function draw(userChoice, compChoice) {
    const defineUserPlayer = "user".fontsize(4).sub();
    const defineCompPlayer = "computer".fontsize(4).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${defineUserPlayer} beats  ${convertToWord(compChoice)}${defineCompPlayer}. It's a draw 🙌`;
    userChoiceDiv.classList.add('greyGlow');
    setTimeout(() => userChoiceDiv.classList.remove('greyGlow'), 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

game();

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

main();
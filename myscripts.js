function getComputerChoice() {
    const choice = ['paper', 'scissor', 'stone'];
    let num = Math.floor(Math.random()*3);
    return choice[num];
}

function playRound(playerSelection, computerSelection) {
    //show the result of each round
    switch(playerSelection){
        case 'stone':
            switch(computerSelection){
                case 'stone':
                    console.log('Tie');
                    break;
                case 'scissor':
                    console.log('You win');
                    playerPoint++;
                    break;
                default: //'paper'
                    console.log('You lose');
                    computerPoint++;
            }
            break;
        case 'paper':
            switch(computerSelection){
                case 'stone':
                    console.log('You win');
                    playerPoint++;
                    break;
                case 'scissor':
                    console.log('You lose');
                    computerPoint++;
                    break;
                default: //'paper'
                    console.log('Tie');
            }
            break;
        case 'scissor':
            switch(computerSelection){
                case 'stone':
                    console.log('You lose');
                    computerPoint++;
                    break;
                case 'scissor':
                    console.log('Tie');
                    break;
                default: //'paper'
                    console.log('You won');
                    playerPoint++;
            }
            break;
        default:
            console.log('Wrong input');
    }
}

const gameNum = 
prompt("How many games do you/computer need to win to end the game?")

let playerPoint = 0;
let computerPoint = 0;

let playerSelection = '';

const paper = document.getElementById('paper');
const scissor = document.querySelector('#scissor');
const stone = document.querySelector('#stone');

const urPoint = document.createElement('p')
// infinite loop when using while loop
/*while ((playerPoint !== gameNum) || (computerPoint !== gameNum)){
    if (playerPoint == gameNum) {
        break;
    }
    if (computerPoint == gameNum) {
        break;
    }*/
    
    paper.addEventListener("click", (e) => {
        e.preventDefault();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log("Computer's choice is " + computerSelection);
        
        playerSelection = 'paper';
        console.log("Your choice is " + playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playerPoint);
        console.log(computerPoint);
        if (playerPoint == gameNum) {
            console.log("You win this game !!");
        }
        if (computerPoint == gameNum) {
            console.log("Computer wins this game !!");
        }
    });
    scissor.addEventListener("click", (e) => {
        e.preventDefault();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log("Computer's choice is " + computerSelection);

        playerSelection = 'scissor';
        console.log("Your choice is " + playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playerPoint);
        console.log(computerPoint);
        if (playerPoint == gameNum) {
            console.log("You win this game !!");
        }
        if (computerPoint == gameNum) {
            console.log("Computer wins this game !!");
        }
    });
    stone.addEventListener("click", (e) => {
        e.preventDefault();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log("Computer's choice is " + computerSelection);

        playerSelection = 'stone';
        console.log("Your choice is " + playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playerPoint);
        console.log(computerPoint);
        if (playerPoint == gameNum) {
            console.log("You win this game !!");
        }
        if (computerPoint == gameNum) {
            console.log("Computer wins this game !!");
        }
    });
//}
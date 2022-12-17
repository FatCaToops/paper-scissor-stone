function getComputerChoice() {
    const choice = ['paper', 'scissor', 'stone'];
    let num = Math.floor(Math.random()*3);
    return choice[num];
}

function playRound(playerSelection, computerSelection) {
    //show the result of each round
<<<<<<< HEAD
=======
    let cWin = "Computer wins this round";
    let pWin = "You win this round";
    let tie = "Result is tie";
>>>>>>> rps-ui
    switch(playerSelection){
        case 'stone':
            switch(computerSelection){
                case 'stone':
                    console.log('Tie');
<<<<<<< HEAD
=======
                    return tie;
>>>>>>> rps-ui
                    break;
                case 'scissor':
                    console.log('You win');
                    playerPoint++;
<<<<<<< HEAD
=======
                    return pWin;
>>>>>>> rps-ui
                    break;
                default: //'paper'
                    console.log('You lose');
                    computerPoint++;
<<<<<<< HEAD
=======
                    return cWin;
>>>>>>> rps-ui
            }
            break;
        case 'paper':
            switch(computerSelection){
                case 'stone':
                    console.log('You win');
                    playerPoint++;
<<<<<<< HEAD
=======
                    return pWin;
>>>>>>> rps-ui
                    break;
                case 'scissor':
                    console.log('You lose');
                    computerPoint++;
<<<<<<< HEAD
                    break;
                default: //'paper'
                    console.log('Tie');
=======
                    return cWin;
                    break;
                default: //'paper'
                    console.log('Tie');
                    return tie;
>>>>>>> rps-ui
            }
            break;
        case 'scissor':
            switch(computerSelection){
                case 'stone':
                    console.log('You lose');
                    computerPoint++;
<<<<<<< HEAD
                    break;
                case 'scissor':
                    console.log('Tie');
                    break;
                default: //'paper'
                    console.log('You won');
                    playerPoint++;
=======
                    return cWin;
                    break;
                case 'scissor':
                    console.log('Tie');
                    return tie;
                    break;
                default: //'paper'
                    console.log('You win');
                    playerPoint++;
                    return pWin;
>>>>>>> rps-ui
            }
            break;
        default:
            console.log('Wrong input');
    }
}

<<<<<<< HEAD
const gameNum = 
prompt("How many games do you/computer need to win to end the game?")
=======
function updatePoint(parent, node, pPoint, cPoint) {
    parent.removeChild(node);
    let displayPoint = document.createElement('p');
    let detail = document.querySelector('.details');
    displayPoint.innerText = pPoint + ":" + cPoint;
    displayPoint.className = "vsPoint";
    parent.insertBefore(displayPoint, detail);
}

function updateDetail(pSelection, cSelection, res) {
    let list = document.createElement('li');
    let detail = document.querySelector('.details');
    
    list.innerText = "Your choice is " + pSelection + ". "
                    + "Computer's choice is " + cSelection + ". "
                    + res;
    detail.appendChild(list);
}

const gameNum = 
prompt("How many rounds do you/computer need to win?")
>>>>>>> rps-ui

let playerPoint = 0;
let computerPoint = 0;

let playerSelection = '';

<<<<<<< HEAD
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
=======
// get button
let paper = document.getElementById('paper');
let scissor = document.querySelector('#scissor');
let stone = document.querySelector('#stone');

let points = document.querySelector('.points');
let vsPoint = document.querySelector('.vsPoint');
let btn = document.querySelector('.button');

paper.addEventListener("click", (e) => {
    e.preventDefault();
    const computerSelection = getComputerChoice().toLowerCase();
    console.log("Computer's choice is " + computerSelection);
    
    playerSelection = 'paper';
    console.log("Your choice is " + playerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(playerPoint);
    console.log(computerPoint);

    vsPoint = document.querySelector('.vsPoint');
    updatePoint(points, vsPoint, playerPoint, computerPoint);
    updateDetail(playerSelection, computerSelection, result);
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
    console.log("Computer's choice is " + computerSelection + " .");

    playerSelection = 'scissor';
    console.log("Your choice is " + playerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(playerPoint);
    console.log(computerPoint);

    vsPoint = document.querySelector('.vsPoint');
    updatePoint(points, vsPoint, playerPoint, computerPoint);
    updateDetail(playerSelection, computerSelection, result);
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
    console.log("Computer's choice is " + computerSelection + " .");

    playerSelection = 'stone';
    console.log("Your choice is " + playerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(playerPoint);
    console.log(computerPoint);

    vsPoint = document.querySelector('.vsPoint');
    updatePoint(points, vsPoint, playerPoint, computerPoint);
    updateDetail(playerSelection, computerSelection, result);
    if (playerPoint == gameNum) {
        console.log("You win this game !!");
    }
    if (computerPoint == gameNum) {
        console.log("Computer wins this game !!");
    }
});
>>>>>>> rps-ui

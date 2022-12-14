function getComputerChoice() {
    const choice = ['paper', 'scissor', 'stone'];
    let num = Math.floor(Math.random()*3);
    return choice[num];
}

const gameNum = prompt("How many games do you want ot play?");

function playRound(playerSelection, computerSelection) {
    for(let i = 1; i <= gameNum; i++){
        switch(playerSelection){
            case 'stone':
                switch(computerSelection){
                    case 'stone':
                        console.log('Tie');
                        break;
                    case 'scissor':
                        console.log('You win');
                        break;
                    default: //'paper'
                        console.log('You lose');
                }
                break;
            case 'paper':
                switch(computerSelection){
                    case 'stone':
                        console.log('You win');
                        break;
                    case 'scissor':
                        console.log('You lose');
                        break;
                    default: //'paper'
                        console.log('Tie');
                }
                break;
            case 'scissor':
                switch(computerSelection){
                    case 'rock':
                        console.log('You lose');
                        break;
                    case 'scissor':
                        console.log('Tie');
                        break;
                    default: //'paper'
                        console.log('You won');
                }
                break;
            default:
                console.log('Wrong input');
        }
    }
}

const playerSelection = 
prompt("What's your choice? (please choose from paper, scissor, and stone)")
.toLowerCase();
console.log("Your choice is " + playerSelection);
const computerSelection = getComputerChoice().toLowerCase();
console.log("Computer's choice is " + computerSelection);
playRound(playerSelection, computerSelection);
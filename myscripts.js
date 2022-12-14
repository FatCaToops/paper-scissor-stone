function getComputerChoice() {
    const choice = ['paper', 'scissor', 'stone'];
    let num = Math.floor(Math.random()*3);
    return choice[num];
}
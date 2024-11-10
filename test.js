let currentPrizeNumber = 1;
let prizesLeft = 10;
let currentParticipantsAmount = document.getElementById('participantsLeft').value;


function chooseWinner() {
    const totalPrizesAmount = 10;
    const prizeDrawWinnerID = Math.ceil((currentParticipantsAmount * currentPrizeNumber/totalPrizesAmount) - prizesLeft);
    
    if (prizesLeft > 1) {
        currentParticipantsAmount -= 1;
        currentPrizeNumber += 1;
        prizesLeft -= 1;
    
    }
    
    document.getElementById('participantsAmount').innerHTML = currentParticipantsAmount;
    document.getElementById('prizesLeft').innerHTML = prizesLeft;
    document.getElementById('result').innerHTML = prizeDrawWinnerID;
    
}

countWinnersBtn.addEventListener('click', chooseWinner);


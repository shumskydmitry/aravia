const countWinnersBtn = document.querySelector('#countWinnersBtn');

function countWinnersList() {

    const alertMessage = 'Заполните обязательные поля'

    let participantsLeft = document.getElementById('participantsLeft').value;
    let prizesLeft = document.getElementById('prizesLeft').value;
    let winnersInListLeft = document.getElementById('winnersInGroup').value;
    let coefficient = document.getElementById('coefficient').value;

    let winnersList = [];
    let firstWinnerInGroup = Math.trunc((participantsLeft / prizesLeft) * coefficient);
    winnersList[0] = firstWinnerInGroup;

    let nextWinnerInGroup = firstWinnerInGroup;

    for (let i = 1; i < winnersInListLeft; i ++) {
         nextWinnerInGroup += 3;
         winnersList.push(nextWinnerInGroup);
    }

    const resultString = winnersList.join(', ');

    if (participantsLeft.length >= 1 || prizesLeft.length >= 1 || winnersInListLeft.length >= 1) {
        document.getElementById('result').innerHTML = resultString;
    } else {
        document.getElementById('result').innerHTML = alertMessage;
    }
}

countWinnersBtn.addEventListener('click', countWinnersList);
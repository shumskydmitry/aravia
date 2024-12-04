let participants = [];
let prizesLeft = 0;
let currentPrizeNumber = 0;
let isInitialized = false; // Флаг для проверки, начат ли розыгрыш

document.getElementById('countWinnersBtn').addEventListener('click', handleClick);

function handleClick() {
    if (!isInitialized) {
        startDrawing();
    } else {
        drawWinner();
    }
}

function startDrawing() {
    const totalParticipantsAmount = parseInt(document.getElementById("participants").value);
    const totalPrizesAmount = parseInt(document.getElementById("prizes").value);

    if (isNaN(totalParticipantsAmount) || isNaN(totalPrizesAmount) || totalParticipantsAmount <= 0 || totalPrizesAmount <= 0) {
        document.getElementById("result").innerText = "Пожалуйста, введите корректные данные.";
        return;
    }

    participants = Array.from({ length: totalParticipantsAmount }, (_, i) => i + 1);
    prizesLeft = totalPrizesAmount;
    currentPrizeNumber = totalPrizesAmount;

    isInitialized = true;
    document.getElementById("result").innerText = "Розыгрыш начат! Нажмите кнопку для выбора победителя.";
}

function drawWinner() {
    if (prizesLeft <= 0) {
        document.getElementById("result").innerText = "Призы закончились. Розыгрыш окончен.";
        document.getElementById("countWinnersBtn").disabled = true;
        return;
    }

    const rawN = (participants.length * currentPrizeNumber / prizesLeft) - prizesLeft;
    const winnerIndex = Math.ceil(rawN) - 1;
    const winner = participants.splice(winnerIndex, 1)[0];

    const resultDiv = document.getElementById("result");
    const currentResults = resultDiv.innerHTML;
    resultDiv.innerHTML = `${currentResults}<br>Победитель №${currentPrizeNumber}: Участник ${winner}`;

    prizesLeft -= 1;
    currentPrizeNumber -= 1;

    if (prizesLeft <= 0) {
        resultDiv.innerHTML += "<br><b>Призы закончились. Розыгрыш окончен.</b>";
        document.getElementById("countWinnersBtn").disabled = true;
    }
}
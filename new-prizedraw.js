let participants = [];
let prizesLeft = 0; // Текущее количество неразыгранных призов
let currentPrizeNumber = 0; // Текущий номер приза
let totalPrizes = 0; // Общее количество призов (Y)
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
    const totalParticipantsAmount = parseInt(document.getElementById("participants").value.trim());
    totalPrizes = parseInt(document.getElementById("prizes").value.trim());

    if (isNaN(totalParticipantsAmount) || isNaN(totalPrizes) || totalParticipantsAmount <= 0 || totalPrizes <= 0) {
        document.getElementById("result").innerText = "Пожалуйста, введите корректные данные.";
        return;
    }

    participants = Array.from({ length: totalParticipantsAmount }, (_, i) => i + 1);
    prizesLeft = totalPrizes;
    currentPrizeNumber = totalPrizes;

    isInitialized = true;
    document.getElementById("result").innerText = "Розыгрыш начат! Нажмите кнопку для выбора победителя.";
}

function drawWinner() {
    if (prizesLeft <= 0) {
        document.getElementById("result").innerText = "Призы закончились. Розыгрыш окончен.";
        document.getElementById("countWinnersBtn").disabled = true;
        return;
    }

    const i = totalPrizes - prizesLeft; // Количество уже разыгранных призов
    const rawN = (participants.length * currentPrizeNumber / totalPrizes) - i;
    const winnerIndex = Math.ceil(rawN) - 1;

    // Убедимся, что индекс находится в пределах массива
    const adjustedIndex = Math.max(0, Math.min(winnerIndex, participants.length - 1));
    const winner = participants.splice(adjustedIndex, 1)[0];

    // Обновление результата
    const resultDiv = document.getElementById("result");
    const currentResults = resultDiv.innerHTML;
    resultDiv.innerHTML = `${currentResults}<br>Победитель №${currentPrizeNumber}: Участник ${winner}`;

    // Обновляем оставшиеся призы
    prizesLeft -= 1; // Уменьшаем количество оставшихся призов
    currentPrizeNumber -= 1; // Уменьшаем текущий номер приза

    if (prizesLeft <= 0) {
        resultDiv.innerHTML += "<br><b>Призы закончились. Розыгрыш окончен.</b>";
        document.getElementById("countWinnersBtn").disabled = true;
    }
}
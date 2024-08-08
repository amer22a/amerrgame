let timer;
let score = 0;
const clickButton = document.getElementById('click-button');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart');

clickButton.addEventListener('click', () => {
    if (parseInt(timerDisplay.innerText) > 0) {
        score++;
        scoreDisplay.innerText = عدد النقرات: ${score};
    }
});

function startGame() {
    score = 0;
    scoreDisplay.innerText = عدد النقرات: ${score};
    clickButton.disabled = false;
    restartButton.style.display = 'none';

    let timeLeft = 10;
    timerDisplay.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clickButton.disabled = true;
            restartButton.style.display = 'block';
            restartButton.focus();
        }
    }, 1000);
}

restartButton.addEventListener('click', () => {
    startGame();
});

startGame();
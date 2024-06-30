document.addEventListener('DOMContentLoaded', function () {
    let score = 0;
    let strength = 1;
    let endurance = 1;
    let strengthLevel = 1;
    let enduranceLevel = 1;
    let strengthCost = 15;
    let enduranceCost = 30;
    let doubleClickPurchased = false;
    let autoclickerPurchased = false;
    let autoclickerInterval = null;

    const weightFirst = document.querySelector('.weight-first');
    const weightSecond = document.querySelector('.weight-second');
    const button = document.getElementById('clicker');
    const scoreDisplay = document.getElementById('score');
    const strengthLevelDisplay = document.getElementById('strength-level');
    const enduranceLevelDisplay = document.getElementById('endurance-level');
    const strengthCostDisplay = document.getElementById('strength-cost');
    const enduranceCostDisplay = document.getElementById('endurance-cost');
    const upgradeStrengthButton = document.getElementById('upgrade-strength');
    const upgradeEnduranceButton = document.getElementById('upgrade-endurance');
    const doubleClickButton = document.getElementById('double-click');
    const autoclickerButton = document.getElementById('autoclicker');
    const titleDisplay = document.getElementById('titul');

    const titles = ['Новичок', 'Специалист', 'Мастер', 'Эксперт', 'Легенда'];

    button.addEventListener('click', () => {
        let pointsToAdd = 3 * strength;
        if (doubleClickPurchased) {
            pointsToAdd *= 2;
        }
        score += pointsToAdd;
        scoreDisplay.textContent = `Очки: ${score}`;

        button.disabled = true;

        weightFirst.style.top = '60px';
        weightSecond.style.top = '60px';

        setTimeout(() => {
            weightFirst.style.top = '180px';
            weightSecond.style.top = '180px';

            setTimeout(() => {
                button.disabled = false;
            }, 1000 / endurance);
        }, 900 / endurance);
    });

    upgradeStrengthButton.addEventListener('click', () => {
        if (score >= strengthCost) {
            score -= strengthCost;
            strength++;
            strengthLevel++;
            strengthCost = Math.ceil(strengthCost * 4);
            updateDisplay();
        }
    });

    upgradeEnduranceButton.addEventListener('click', () => {
        if (score >= enduranceCost) {
            score -= enduranceCost;
            endurance++;
            enduranceLevel++;
            enduranceCost = Math.ceil(enduranceCost * 4);
            updateDisplay();
        }
    });

    doubleClickButton.addEventListener('click', () => {
        if (score >= 300 && !doubleClickPurchased) {
            score -= 300;
            doubleClickPurchased = true;
            doubleClickButton.disabled = true;
            updateDisplay();
        }
    });

    autoclickerButton.addEventListener('click', () => {
        if (score >= 500 && !autoclickerPurchased) {
            score -= 500;
            autoclickerPurchased = true;
            autoclickerButton.disabled = true;
            autoclickerInterval = setInterval(() => {
                button.click();
            }, 1000); // 
            updateDisplay();
        }
    });
    function updateTitle() {
        const titleIndex = Math.floor(strengthLevel / 10);
        const title = titles[Math.min(titleIndex, titles.length - 1)];
        titleDisplay.textContent = title;
    }

    function updateDisplay() {
        scoreDisplay.textContent = `Очки: ${score}`;
        strengthLevelDisplay.textContent = strengthLevel;
        enduranceLevelDisplay.textContent = enduranceLevel;
        strengthCostDisplay.textContent = strengthCost;
        enduranceCostDisplay.textContent = enduranceCost;
        updateTitle();
    }
});

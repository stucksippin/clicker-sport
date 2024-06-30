document.addEventListener('DOMContentLoaded', function () {
    let score = 0;
    let strength = 1;
    let endurance = 1;
    let strengthLevel = 1;
    let enduranceLevel = 1;
    let strengthCost = 15;
    let enduranceCost = 30;

    const weightFirst = document.querySelector('.weight-first');
    const weightSecond = document.querySelector('.weight-second');
    const button = document.getElementById('clicker');
    const scoreDisplay = document.getElementById('score');
    const strengthDisplay = document.getElementById('strength');
    const enduranceDisplay = document.getElementById('endurance');
    const strengthLevelDisplay = document.getElementById('strength-level');
    const enduranceLevelDisplay = document.getElementById('endurance-level');
    const strengthCostDisplay = document.getElementById('strength-cost');
    const enduranceCostDisplay = document.getElementById('endurance-cost');
    const upgradeStrengthButton = document.getElementById('upgrade-strength');
    const upgradeEnduranceButton = document.getElementById('upgrade-endurance');

    button.addEventListener('click', () => {
        score += 10 * strength;
        scoreDisplay.textContent = `Очки: ${score}`;

        button.disabled = true;

        weightFirst.style.top = '80px';
        weightSecond.style.top = '80px';

        setTimeout(() => {
            weightFirst.style.top = '130px';
            weightSecond.style.top = '130px';

            setTimeout(() => {
                button.disabled = false;
            }, 200 / endurance);
        }, 400 / endurance);
    });

    upgradeStrengthButton.addEventListener('click', () => {
        if (score >= strengthCost) {
            score -= strengthCost;
            strength++;
            strengthLevel++;
            strengthCost = Math.ceil(strengthCost * 1.18);
            updateDisplay();
        }
    });

    upgradeEnduranceButton.addEventListener('click', () => {
        if (score >= enduranceCost) {
            score -= enduranceCost;
            endurance++;
            enduranceLevel++;
            enduranceCost = Math.ceil(enduranceCost * 1.15);
            updateDisplay();
        }
    });

    function updateDisplay() {
        scoreDisplay.textContent = `Очки: ${score}`;
        strengthDisplay.textContent = strength;
        enduranceDisplay.textContent = endurance;
        strengthLevelDisplay.textContent = strengthLevel;
        enduranceLevelDisplay.textContent = enduranceLevel;
        strengthCostDisplay.textContent = strengthCost;
        enduranceCostDisplay.textContent = enduranceCost;
    }
});

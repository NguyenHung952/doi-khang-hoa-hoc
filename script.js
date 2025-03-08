let playerDeck = [];
let enemyDeck = [];
let selectedPlayerCard = null;
let selectedEnemyCard = null;

function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("restartBtn").style.display = "none";
    generateBalancedDecks();
    displayCards(playerDeck, "playerCards", true);
    displayCards(enemyDeck, "enemyCards");
    document.getElementById("logs").innerText = "📝 Chọn một lá bài của bạn, sau đó chọn một lá bài của đối thủ!";
}

function restartGame() {
    startGame();
}

function generateBalancedDecks() {
    const reactionKeys = Object.keys(reactions);
    const shuffledKeys = reactionKeys.sort(() => 0.5 - Math.random());

    playerDeck = [];
    enemyDeck = [];

    for (let i = 0; i < 6; i++) {
        const reactants = shuffledKeys[i % shuffledKeys.length].split(" + ");
        playerDeck.push({ name: reactants[0].trim() });
        enemyDeck.push({ name: reactants[1].trim() });
    }
}

function displayCards(cards, containerId, isPlayer = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    cards.forEach((card, index) => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `<strong>${card.name}</strong>`;
        cardElement.onclick = () => (isPlayer ? selectPlayerCard(index, cardElement) : selectEnemyCard(index, cardElement));
        container.appendChild(cardElement);
    });
}

function selectPlayerCard(index, element) {
    selectedPlayerCard = playerDeck[index].name;
    document.querySelectorAll(".player .card").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");
}

function selectEnemyCard(index, element) {
    if (!selectedPlayerCard) {
        document.getElementById("logs").innerText = "⚠️ Hãy chọn bài của bạn trước!";
        return;
    }
    selectedEnemyCard = enemyDeck[index].name;
    document.querySelectorAll(".enemy .card").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");

    checkReaction();
}

function checkReaction() {
    const reactionKey1 = `${selectedPlayerCard} + ${selectedEnemyCard}`;
    const reactionKey2 = `${selectedEnemyCard} + ${selectedPlayerCard}`;
    const reaction = reactions[reactionKey1] || reactions[reactionKey2];

    if (reaction) {
        document.getElementById("logs").innerText = `✅ Phản ứng xảy ra: ${reaction}`;
        removeSelectedCards();
    } else {
        document.getElementById("logs").innerText = "❌ Không có phản ứng!";
    }

    selectedPlayerCard = null;
    selectedEnemyCard = null;
}

function removeSelectedCards() {
    const playerSelected = document.querySelector(".player .selected");
    const enemySelected = document.querySelector(".enemy .selected");

    if (playerSelected) playerSelected.remove();
    if (enemySelected) enemySelected.remove();
}

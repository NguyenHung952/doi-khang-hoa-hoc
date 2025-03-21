let deck = [];
let selectedCards = [];

document.getElementById("hintBtn").addEventListener("click", suggestReaction);

function startGame() {
    document.querySelector("button").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("restartBtn").style.display = "block";
    document.getElementById("logs").innerText = "📝 Hãy chọn hai nguyên tố để kiểm tra phản ứng!";
    generateDeck();
    displayCards();
}

function generateDeck() {
    let reactionPairs = Object.keys(reactions);
    let shuffledPairs = reactionPairs.sort(() => 0.5 - Math.random()).slice(0, 12);

    deck = shuffledPairs.flatMap(pair => pair.split(" + ").map(name => ({ name })));
    deck.sort(() => 0.5 - Math.random());
}

function displayCards() {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    deck.forEach((card, index) => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `<strong>${card.name}</strong>`;
        cardElement.onclick = () => selectCard(index, cardElement);
        container.appendChild(cardElement);
    });
}

function selectCard(index, element) {
    if (selectedCards.length === 2) return;

    selectedCards.push({ index, element });
    element.classList.add("selected");

    if (selectedCards.length === 2) {
        checkReaction();
    }
}

function checkReaction() {
    let [card1, card2] = selectedCards;
    let reaction = reactions[`${card1.element.innerText} + ${card2.element.innerText}`] ||
                   reactions[`${card2.element.innerText} + ${card1.element.innerText}`];

    if (reaction) {
        document.getElementById("logs").innerText = `✅ Phản ứng xảy ra: ${reaction}`;
        setTimeout(() => removeCards(), 1000);
    } else {
        document.getElementById("logs").innerText = "❌ Không có phản ứng!";
        setTimeout(() => resetSelection(), 1000);
    }
}

function removeCards() {
    selectedCards.forEach(({ element }) => element.remove());
    selectedCards = [];

    if (document.querySelectorAll(".card").length === 0) {
        document.getElementById("logs").innerText = "🎉 Chúc mừng! Bạn đã hoàn thành trò chơi!";
    }
}

function resetSelection() {
    selectedCards.forEach(({ element }) => element.classList.remove("selected"));
    selectedCards = [];
}

function suggestReaction() {
    for (let reactants in reactions) {
        let [elem1, elem2] = reactants.split(" + ");
        if (deck.some(card => card.name === elem1) && deck.some(card => card.name === elem2)) {
            document.getElementById("logs").innerText = `💡 Gợi ý: Thử chọn "${elem1}" và "${elem2}"`;
            return;
        }
    }
    document.getElementById("logs").innerText = "❌ Không có phản ứng nào có thể thực hiện!";
}

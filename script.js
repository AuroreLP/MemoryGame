const cards = [
    'https://picsum.photos/id/237/100/100',
    'https://picsum.photos/id/238/100/100',
    'https://picsum.photos/id/239/100/100',
    'https://picsum.photos/id/240/100/100',
    'https://picsum.photos/id/241/100/100',
    'https://picsum.photos/id/242/100/100',
    'https://picsum.photos/id/243/100/100',
    'https://picsum.photos/id/244/100/100',
];

const gameBoard = document.getElementById('game-board');

function createCard(CardURL) {
    // création de la carte
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = CardURL;

    // ajout du contenu de la carte - renvoi vers l'url de l'image
    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = `${CardURL}`;

    // ici on lie l'image à la carte
    card.appendChild(cardContent);
    return card;
}

function duplicateArray(arraySimple){
    let arrayDouble = [];
    arrayDouble.push(...arraySimple);
    arrayDouble.push(...arraySimple);

    return arrayDouble;
}

// créer la méthode shuffleArray pour mélanger les cartes
function shuffleArray(arrayToshuffle){
    const arrayShuffled = arrayToshuffle.sort(() => 0.5 - Math.random());
    return arrayShuffled;
}

let allCards = duplicateArray(cards);
// mélanger le tableau allCards avant de le parcourir
allCards = shuffleArray(allCards);
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);

})
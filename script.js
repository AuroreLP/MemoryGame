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

let selectedCards = [];

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

    card.addEventListener('click', onCardClick);
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

// créer fonction onCardClick pour retourner la carte sur le clic
function onCardClick(e){
    const card = e.target.parentElement;
    card.classList.add('flip');

    selectedCards.push(card);
    if(selectedCards.length == 2) {
        setTimeout(() => {
            // le code à exécuter après le timeout
            if(selectedCards[0].dataset.value == selectedCards[1].dataset.value) {
                // on a trouvé une paire
                selectedCards[0].classList.add("matched");
                selectedCards[1].classList.add("matched");
                selectedCards[0].removeEventListener('click', onCardClick);
                selectedCards[1].removeEventListener('click', onCardClick);

                const allCardsNotMatched = document.querySelectorAll('.card:not(.matched)');
                console.log(allCardsNotMatched.length);
                if (allCardsNotMatched.length == 0) {
                    // le joueur a gagné
                    alert("Bravo, vous avez gagné!");
                }
            }
            else{
                // on s'est trompé
                selectedCards[0].classList.remove("flip");
                selectedCards[1].classList.remove("flip");
            }
            selectedCards = [];
       }, 1000);
    }
}

let allCards = duplicateArray(cards);
// mélanger le tableau allCards avant de le parcourir
allCards = shuffleArray(allCards);
allCards.forEach(card => {
    const cardHtml = createCard(card);
    gameBoard.appendChild(cardHtml);

})
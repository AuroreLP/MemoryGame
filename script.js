class Card {
    constructor(emoji) {
      this.emoji = emoji;
      this.element = document.createElement('div');
      this.element.className = 'card';
      this.element.setAttribute('tabindex', '0');
      this.element.setAttribute('role', 'button');
      this.element.setAttribute('aria-label', 'Carte de mémoire');
      this.flipped = false;
      this.matched = false;
  
      this.element.addEventListener('click', () => this.handleClick());
      this.element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') this.handleClick();
      });
    }
  
    handleClick() {
      if (this.flipped || this.matched) return;
      this.flip();
      game.handleCardFlip(this);
    }
  
    flip() {
      this.flipped = true;
      this.element.classList.add('flipped');
      this.element.textContent = this.emoji;
    }
  
    unflip() {
      this.flipped = false;
      this.element.classList.remove('flipped');
      this.element.textContent = '';
    }
  
    match() {
        this.matched = true;
        this.element.classList.add('matched');
        // Retire la classe après l'animation
        setTimeout(() => {
          this.element.classList.remove('matched');
        }, 500);
    }
        
  
    getNode() {
      return this.element;
    
  }
}
  
  class MemoryGame {
    constructor(boardId, timerId) {
      this.board = document.getElementById(boardId);
      this.timerDisplay = document.getElementById(timerId);
      this.restartButton = document.getElementById('restart');
  
      this.emojis = ['🐶', '🐱', '🐰', '🦊', '🐼', '🐻', '🐸', '🦁'];
      this.cards = [];
      this.firstCard = null;
      this.lock = false;
      this.startTime = null;
      this.interval = null;
  
      this.restartButton.addEventListener('click', () => this.start());
      this.start();
    }
  
    start() {
      this.clearBoard();
      this.shuffle();
      this.render();
      this.startTimer();
      document.getElementById('winMessage').style.display = 'none';
    }
  
    clearBoard() {
      this.board.innerHTML = '';
      this.cards = [];
      this.firstCard = null;
      clearInterval(this.interval);
      this.timerDisplay.textContent = 'Temps : 0s';
    }
  
    shuffle() {
      const deck = [...this.emojis, ...this.emojis].sort(() => 0.5 - Math.random());
      deck.forEach(emoji => this.cards.push(new Card(emoji)));
    }
  
    render() {
      this.cards.forEach(card => this.board.appendChild(card.getNode()));
    }
  
    startTimer() {
      this.startTime = Date.now();
      this.interval = setInterval(() => {
        const seconds = Math.floor((Date.now() - this.startTime) / 1000);
        this.timerDisplay.textContent = `Temps : ${seconds}s`;
      }, 1000);
    }
  
    handleCardFlip(card) {
        if (this.lock || card === this.firstCard) return;
      
        card.flip();
      
        if (!this.firstCard) {
          this.firstCard = card;
          return;
        }
      
        this.lock = true;
      
        if (this.firstCard.emoji === card.emoji) {
          // Match found
          setTimeout(() => {
            this.firstCard.match();
            card.match();
            this.firstCard = null;
            this.lock = false;
      
            if (this.cards.every(c => c.matched)) {
              clearInterval(this.interval);
              const seconds = Math.floor((Date.now() - this.startTime) / 1000);
              const winMsg = document.getElementById('winMessage');
              winMsg.textContent = `🎉 Bravo ! Toutes les paires trouvées en ${seconds}s !`;
              winMsg.style.display = 'block';
            }
          }, 300); // Laisse le temps de voir les deux cartes retournées
        } else {
          // No match
          setTimeout(() => {
            this.firstCard.unflip();
            card.unflip();
            this.firstCard = null;
            this.lock = false;
          }, 1000); // Donne une seconde pour que le joueur voie les cartes
        }
    }
      
  }
  
  const game = new MemoryGame('gameBoard', 'timer');
  
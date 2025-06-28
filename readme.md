# Memory Game 🧠🎮

A simple, accessible memory matching game built with HTML, CSS, and JavaScript.

## 🎯 Features

- Flip cards to find matching pairs of emojis.
- Timer to track how long it takes you to complete the game.
- Restart button to play again.
- Visual and accessible interactions (keyboard support and ARIA labels).
- Smooth flip and match animations.

## 🗂️ Project Structure

.
├── index.html # Main HTML file
├── style.css # Styling and animations
└── script.js # Game logic


## 🧩 How to Play

1. Open `index.html` in your browser.
2. Click or press `Enter`/`Space` on a card to flip it.
3. Find all the matching pairs.
4. The timer starts automatically when the game begins.
5. Once all pairs are matched, a congratulatory message displays your completion time.
6. Click the **Restart** button to play again.

## 🛠️ How It Works

### **Card class**
  - Each card is an element with a hidden emoji.
  - Handles flipping, unflipping, and matching animations.
  - Accessible with keyboard controls.

### **MemoryGame class**
  - Initializes the board with shuffled emoji pairs.
  - Tracks game state and timer.
  - Manages matching logic and win condition.
  - Provides restart functionality.

### **CSS**
  - Styled game board with a grid layout.
  - Flip and match animations for visual feedback.
  - Responsive and centered layout.

## ♿ Accessibility

- Each card is focusable (`tabindex="0"`) and can be activated via keyboard (`Enter` or `Space`).
- ARIA labels describe the purpose of the cards (`role="button"` and `aria-label`).
- Clear visual indicators for flipped and matched cards.

## 💡 Customization

You can customize the emojis by editing the array in `script.js`:
```javascript
this.emojis = ['🐶', '🐱', '🐰', '🦊', '🐼', '🐻', '🐸', '🦁'];
```
Add or remove emojis to adjust the difficulty.

## 🚀 Getting Started

You can run the project locally using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code:

1. Clone this repository:
   ```bash
   git clone https://github.com/AuroreLP/MemoryGame.git
   cd MemoryGame
   ```
2. Open the project folder in VS Code.
3. Right-click index.html and select Open with Live Server, or click Go Live in the status bar.
4. Your browser will automatically open at: http://localhost:5500 - (or another port if 5500 is already in use)
5. Start playing!

## 📷 Preview

## 📃 License
This project is licensed under the MIT License.

Enjoy the game and improve your memory skills!
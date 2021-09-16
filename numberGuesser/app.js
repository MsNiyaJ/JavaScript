/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
    
        // Check if won
        if(guess === winningNum){
            //Game over - won
            
            // Set winning message
            let msg = `${winningNum} is correct, you win!`;
            gameOver(true, msg);

        } else {
            // Wrong number

            // Decrease number of guesses
            guessesLeft -= 1;
            
            if(guessesLeft === 0){
                //Game over - lost
                let msg = `Game over...you lost. The correct number was ${winningNum}.`;
                gameOver(false, msg);

            } else {
                // Game continues - answer wrong
                
                // Change border color
                guessInput.style.borderColor = 'red';
                
                // Clear Input
                guessInput.value = '';

                // Tell user its the wrong number.
                setMessage(`${guess} is not correct, ${guessesLeft} guesses remaining`, 'red');
            }
        }
    }
});

//Game over
function gameOver(won, msg){
    // Disable input
    guessInput.disabled = true;
    
    // Change border color
    let color;        
    won ? color = 'green' : color = 'red'
    
    // Set border color
    guessInput.style.borderColor = color;
    
    // Set input text color
    guessInput.style.color = color;
    
    // Set message
    setMessage(msg, color);

    // Play again?
    guessBtn.value = 'Play Again';
    if(!guessBtn.classList.contains('play-again'))
        guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

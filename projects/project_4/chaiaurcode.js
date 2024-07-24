let randomnumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let NumGuess = 1;
let PlayGame = true;

if(PlayGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        // console.log(guess)
        validateguess(guess)
    })
}

function validateguess(guess) { //this method is imp bcz in backend we mostly use to validate the userinput as per the need of input to be 
    if (isNaN(guess)) {
        alert(' Please enter a valid number')
    } else if (guess<1) {
        alert(' Please enter a number more than 1')
    } else if (guess>100) {
        alert(' Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(NumGuess === 11){
            displayguess(guess)
            displaymessage(`Game Over. Random number was ${randomnumber}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
    
}

function checkguess(guess) {  //to checking value is high or low 
    if(guess === randomnumber){
        displaymessage(`You guessed it right`)
        endgame()
    } 
    else if (guess<randomnumber){
        displaymessage('Number is too low')
    }
    else if (guess > randomnumber){
        displaymessage('Number is too high')
    }
}

function displayguess(guess) {
    userinput.value = ''
    guessSlot.innerHTML += `${guess} `;
    NumGuess++;
    remaining.innerHTML = `${11-NumGuess}`;
}

function displaymessage(message) { //it will directly connect with dom
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    StartOver.appendChild(p);
    PlayGame = false;
    newgame();
}

function newgame() {
    const NewGameButton = document.querySelector('#newGame');
    NewGameButton.addEventListener('click',function (e) {
    randomnumber = parseInt(Math.random()*100 + 1);
    prevGuess = []
    NumGuess = 1
    remaining.innerHTML = `${11-NumGuess}`;
    userinput.removeAttribute('disabled');
    StartOver.removeChild(p);
    PlayGame = true;
    })
}


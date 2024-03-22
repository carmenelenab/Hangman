let wordsList = ['ant', 'butterfly', 'bee', 'millipede', 'grasshopper'];
let lives = 7;
let found = false;
let choosenIndex = Math.floor(Math.random() * wordsList.length);
let choosenWord = wordsList[choosenIndex];
let wordLen = choosenWord.length;
let element = document.getElementById('word');

window.onload = function () {
    startGame();
}

function startGame() {
    document.getElementById('lettersNo').textContent
        = "You have to guess " + wordLen + " letters";
    for (let i = 0; i < wordLen; ++i) {
        element.textContent = element.textContent + '_ ';
    }
}

function checkLetterMatch() {
    let searchedLetter = document.getElementById('letter').value.trim().toLowerCase();
    for (let i = 0; i < choosenWord.length && wordLen > 0; ++i) {
        if (choosenWord[i] === searchedLetter) {
            let wordArray = element.textContent.split(' ');
            element.textContent = element.textContent + searchedLetter;
            wordArray[i] = searchedLetter;
            element.textContent = wordArray.join(' ');
            --wordLen;
            found = true;
        }
    }
    document.getElementById('letter').value = '';
    livesLeft();
    endOfTheGame();
}

function livesLeft() {
    if (found === false && lives > 0) {
        --lives;
        document.getElementById('livesNo').textContent = "You have " + lives + " lives left";
    }
}

function endOfTheGame() {
    if (!lives) {
        document.getElementById('result').textContent = "Sorry, you lost";
    } else if (!wordLen) {
        document.getElementById('result').textContent = "Congrats, you won!";
    }
}
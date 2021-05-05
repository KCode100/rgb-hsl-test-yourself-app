// GLOBALS
const questionEl = document.querySelector('.question');
const containerEl = document.querySelector('.container');
const nextQuestionBtn = document.getElementById('next-question');
const showAnswerBtn = document.getElementById('show-answer');

let options = [];
let correctColor;

// GENERATE RANDOM NUMBER
const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const generateCorrectColor = () => {
    correctColor = 'rgb(' + randomNumber(256) + ', ' + randomNumber(256) + ', ' + randomNumber(256) + ')';
}

const newQuestion = () => {
    containerEl.innerHTML = '';
    generateCorrectColor();
    console.log('correct color:', correctColor);
    questionEl.textContent = correctColor;
    createOptions();
}

const appendOptions = () => {
    let i;
    const optionsLength = options.length;
    
    for (i = 0; i < optionsLength; i ++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.style.backgroundColor = options[i];
        containerEl.append(option);
        console.log(options[i])
    }
}

// generate wrong rgb Numbers
const wrongRgbNumber = () => {
    const newColor = 'rgb(' + randomNumber(256) + ', ' + randomNumber(256) + ', ' + randomNumber(256) + ')';
    return newColor;
}

// random colors
const createOptions = () => {
    options = [wrongRgbNumber(), wrongRgbNumber(), wrongRgbNumber()];
    
    // position correct answer randomly
    const randomPosition = randomNumber(4);
    options.splice(randomPosition, 0, correctColor)
    
    appendOptions();
}

const showAnswer = () => {
    for (i = 0; i < options.length; i ++) {
        if (containerEl.children[i].style.backgroundColor === correctColor) {
            console.log('correct color found in position', i);
            containerEl.children[i].classList.add('correct-answer');
        }
    }
}

newQuestion();

nextQuestionBtn.addEventListener('click', newQuestion);
showAnswerBtn.addEventListener('click', showAnswer);
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getTrivia);

const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', displayAnswer);

let answerTxt = document.querySelector('#js-answer-text');
let answer = '';

async function getTrivia() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const json = await response.json();
        displayTrivia(json.question);
        answer = json.answer;
        answerTxt.textContent = ''; 
    } catch (err) {
        console.error('Error fetching quote:', err);
        alert('Failed to fetch new quote');
    }
}

function displayTrivia(quote) {
    const triviaText = document.querySelector('#js-quote-text');
    triviaText.textContent = quote;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

getTrivia();

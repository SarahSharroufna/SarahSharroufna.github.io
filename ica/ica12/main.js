const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getTrivia);

const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', displayAnswer);

const answerTxt = document.querySelector('#js-answer-text');
let answer = '';

async function getTrivia() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Resource not found');
            } else {
                throw new Error('Failed to fetch');
            }
        }
        const json = await response.json();
        answer = json.text; 
        displayTrivia(answer);
    } catch (err) {
        console.error('Error fetching quote:', err);
        alert('Failed to fetch new quote. Please try again.');
    }
}

function displayTrivia(quote) {
    const triviaText = document.querySelector('#js-quote-text');
    triviaText.textContent = quote;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

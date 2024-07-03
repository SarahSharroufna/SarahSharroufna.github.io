const endpoint = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

let quoteText = document.querySelector('#js-quote-text');
let quoteCharacter = document.querySelector('#js-quote-character');
let quoteImage = document.querySelector('#js-quote-image');

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        if (data.length > 0) {
            const { quote, character, image } = data[0];
            displayQuote(quote, character, image);
        } else {
            throw new Error('No quote available');
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote, character, imageUrl) {
    quoteText.textContent = `"${quote}"`;
    quoteCharacter.textContent = `- ${character}`;
    quoteImage.src = imageUrl;
}

getQuote();

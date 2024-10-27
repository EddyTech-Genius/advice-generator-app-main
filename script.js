window.onload = populateQuote();

let quoteNumber = document.getElementById('quote-num');
let quoteText = document.getElementById('quote');
let quoteButton = document.getElementById('quote-button');

quoteButton.addEventListener('click', populateQuote);

function populateQuote() {
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)

    .then(response => {
        return response.json()
    })

    .then(data => {
        let name = data.slip

        quoteNumber.innerHTML = name.id
        quoteText.innerHTML = name.advice
    })
};
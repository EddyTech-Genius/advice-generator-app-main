windows.onload = populateQuote()

let quoteNumber = document.getElementById('quote-num');
let quoteText = document.getElementById('quote');
let quoteButton = document.getElementById('quote-button');

quoteButton.addEventListener('click', populateQuote);

function populateQuote() {
    fetch('https://api.adviceslip.com/advice')

    .then(response => {
        return response.json()
    })

    .then(data => {
        let name = data.slip

        quoteNumber.innerHTML = name.id
        quoteText.innerHTML = name.advice
    })
}
'use strict'

const punchlineDOM = document.querySelector('[data-punchline]');
const jokeDOM = document.querySelector('[data-joke]');
const buttonDOM = document.querySelector('[data-btn]');

buttonDOM.addEventListener('click', displayJoke);

function displayJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(res => res.json())
        .then(data => {
            jokeDOM.innerHTML = data[0].setup;
            punchlineDOM.innerHTML = data[0].punchline
        });
}


'use strict'

const jokeDOM = document.querySelector('[data-joke]');
const buttonDOM = document.querySelector('[data-btn]');

buttonDOM.addEventListener('click', displayJoke);

function displayJoke() {
    fetch('https://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => {
            jokeDOM.innerHTML = data.value.joke;
        });
}


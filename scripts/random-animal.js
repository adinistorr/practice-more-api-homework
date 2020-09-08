'use strict'

const pictureDOM = document.querySelector('[data-picture]');
const videoDOM = document.querySelector('[data-video]');
const buttonDOM =  document.querySelector('[data-btn-animal]');
const selectDOM = document.querySelector('[data-select]');

const AnmialEnum = {
    DOG: 'dog',
    CAT: 'cat',
    FOX: 'fox',
}

buttonDOM.addEventListener('click', () => {
    const index = selectDOM.options.selectedIndex;
    const value = selectDOM.options[index].value;
    animal(value);
});

function animal(animal) {
    switch (animal) {
        case AnmialEnum.DOG:
            doRequest('https://random.dog/woof.json');
            break;
        case AnmialEnum.CAT:
            doRequest('https://aws.random.cat/meow');
            break;
        case AnmialEnum.FOX:
            doRequest('https://randomfox.ca/floof');
            break;
        default:
            break;
    }
}

function doRequest(url) {
    pictureDOM.src = '';
    videoDOM.src = '';

    fetch(url)
        .then(res => res.json())
        .then (data => {
            const link = data.url || data.image || data.file
            if (checkIfImage(link)) {
                pictureDOM.src = link;
            } else {
                videoDOM.src = link;
            }
        })
}

function checkIfImage(url) {
    return (url.match(/\.(jpg|jpeg|gif|png|svg)$/) != null);
}

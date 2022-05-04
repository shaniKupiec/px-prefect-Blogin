'use strict'

const addHoverNavAll = document.querySelectorAll('li');
const addHoverCardAll = document.querySelectorAll('.card-link');

addHoverNavAll.forEach(addHoverNav => {
    const elLink = addHoverNav.querySelector('.nav-link');
    // console.log('elLink',elLink);
    // console.log('addHoverNav',addHoverNav);
    addHoverNav.addEventListener('mouseenter', e => {
        elLink.style.color = '#58C93A';
    });
    addHoverNav.addEventListener('mouseleave', e => {
        elLink.style.color = 'white';
    });
})


addHoverCardAll.forEach(addHoverCard => {
    const elSpan = addHoverCard.querySelector('.arrow');
    // console.log('elLink',elLink);
    addHoverCard.addEventListener('mouseenter', e => {
        elSpan.classList.toggle('hidden')
    });
    addHoverCard.addEventListener('mouseleave', e => {
        elSpan.classList.toggle('hidden')
    });
})



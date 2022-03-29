function resize() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    const main = document.querySelector('main');
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    const footer = document.querySelector('footer');

    let footerHeight = footer.offsetHeight;

    main.style.width = innerWidth + 'px';
    main.style.height = (innerHeight-footerHeight) + 'px';
    front.style.width = (innerWidth * 0.6) + 'px'; // need to be modified
    front.style.height = (innerHeight * 0.6) + 'px'; // need to be modified
    footer.style.width = innerWidth + 'px';
}

// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

// Should modify border-radius by function resize()
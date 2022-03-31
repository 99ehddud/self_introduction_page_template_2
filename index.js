function resize() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    const main = document.querySelector('main');
    const front = document.querySelector('#front');
    const imageDiv = document.querySelector('#image_div');
    const picture = document.querySelector('#picture');
    const informationDiv = document.querySelector('#information_div');
    const back = document.querySelector('#back');
    const footer = document.querySelector('footer');

    let footerHeight = footer.offsetHeight;

    main.style.width = innerWidth + 'px';
    main.style.height = (innerHeight-footerHeight) + 'px';
    front.style.width = (innerWidth * 0.6) + 'px'; // need to be modified
    front.style.height = (innerHeight * 0.6) + 'px'; // need to be modified
    imageDiv.style.width = (front.offsetWidth / 2 ) + 'px';
    imageDiv.style.height = front.offsetHeight + 'px';
    picture.style.width = (imageDiv.offsetWidth / 1.7) + 'px';
    picture.style.height = (picture.offsetWidth * 4 / 3) + 'px';
    informationDiv.style.width = (front.offsetWidth / 2) + 'px';
    informationDiv.style.height = front.offsetHeight + 'px';
    footer.style.width = innerWidth + 'px';
}

// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

// Should modify border-radius by function resize()
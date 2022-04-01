// !! Modify function resize(), especially top & left !!

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
    front.style.top = (innerHeight - front.offsetHeight)/2 + 'px';
    front.style.left = (innerWidth - front.offsetWidth)/2 + 'px';
    imageDiv.style.width = (front.offsetWidth / 2 ) + 'px';
    imageDiv.style.height = front.offsetHeight + 'px';
    picture.style.width = (imageDiv.offsetWidth / 1.7) + 'px';
    picture.style.height = (picture.offsetWidth * 4 / 3) + 'px';
    informationDiv.style.width = (front.offsetWidth / 2) + 'px';
    informationDiv.style.height = front.offsetHeight + 'px';
    back.style.width = (innerWidth * 0.6) + 'px'; // need to be modified
    back.style.height = (innerHeight * 0.6) + 'px'; // need to be modified
    back.style.top = (innerHeight - back.offsetHeight) / 2 + 'px';
    back.style.left = (innerWidth - back.offsetWidth) / 2 + 'px';
    footer.style.width = innerWidth + 'px';
}

// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

function rotateToBack() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');

    front.style.transform = 'rotateY(180deg)'; // need to be modified
    front.style.zIndex = 0;
    back.style.transform = 'rotateY(180deg)';
    back.style.zIndex = 1;
}

function rotateToFront() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');

    back.style.transform = 'rotateY(360deg)';
    back.style.zIndex = 0;
    front.style.transform = 'rotateY(360deg)'; // need to be modified
    front.style.zIndex = 1;
}

// Should modify border-radius by function resize()
// !! Modify function resize(), especially top & left !!

function resize() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    const main = document.querySelector('main');
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    
    main.style.width = innerWidth + 'px';
    main.style.height = innerHeight + 'px';
}


// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

function rotateToBack() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');

    front.style.transform = 'rotateY(180deg)';
    front.style.zIndex = 0;
    back.style.transform = 'rotateY(360deg)';
    back.style.zIndex = 1;
}

function rotateToFront() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    
    front.style.transform = 'rotateY(360deg)';
    front.style.zIndex = 1;
    back.style.transform = 'rotateY(180deg)';
    back.style.zIndex = 0;
}
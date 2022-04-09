// !! Modify function resize(), especially top & left !!

function resize() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    const main = document.querySelector('main');
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    
    main.style.width = innerWidth + 'px';
    main.style.height = innerHeight + 'px';

    let frontWidth = front.offsetWidth;
    let frontHeight = front.offsetHeight;

    let left = (innerWidth - frontWidth) / 2;
    let top = (innerHeight - frontHeight) / 2;

    if (innerWidth-frontWidth >= 0) {
        front.style.left = left + 'px';
        back.style.left = left + 'px';
    } else {
        front.style.left = '0px';
        back.style.left = '0px';
    }
    if (innerHeight-frontHeight >= 0) {
        front.style.top = top + 'px';
        back.style.top = top + 'px';
    } else {
        front.style.top = '0px';
        back.style.top = '0px';
    }
}


// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

function rotateToBack() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    
    front.style.transform = 'rotateY(180deg)';
    front.style.zIndex = 0;
    front.style.visibility = 'hidden';
    back.style.transform = 'rotateY(360deg)';
    back.style.zIndex = 1;
    back.style.visibility = 'visible';
}

function rotateToFront() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');
    
    front.style.transform = 'rotateY(360deg)';
    front.style.zIndex = 1;
    front.style.visibility = 'visible';
    back.style.transform = 'rotateY(180deg)';
    back.style.zIndex = 0;
    back.style.visibility = 'hidden';
}
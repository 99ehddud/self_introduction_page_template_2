// !! Modify function resize(), especially top & left !!

function resize() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    const main = document.querySelector('main');
    
    main.style.width = innerWidth + 'px';
    main.style.height = innerHeight + 'px';
}


// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

function rotateToBack() {
    
}
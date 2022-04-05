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
    const informTable = document.querySelector('#inform_table');
    const tableLabel = document.querySelector('.tableLabel');
    const tableContent = document.querySelector('.tableContent');

    main.style.width = innerWidth + 'px';
    main.style.height = innerHeight + 'px';

    let frontHeight = innerHeight * 0.6;
    let frontWidth = frontHeight * 1.58;
    let backHeight = frontHeight;
    let backWidth = frontWidth;
    let frontTop = (innerHeight - frontHeight) / 2;
    let frontLeft = (innerWidth - frontWidth) / 2;
    let backTop = frontTop;
    let backLeft = frontLeft;
    let imageDivWidth = (frontWidth - 4) / 2;
    let imageDivHeight = (frontHeight - 4) / 2;
    let informationDivWidth = imageDivWidth;
    let informationDivHeight = imageDivHeight;


    front.style.width = frontWidth + 'px';
    front.style.height = frontHeight + 'px';
    back.style.width = backWidth + 'px';
    back.style.height = backHeight + 'px';
    
    front.style.top = frontTop + 'px';
    front.style.left = frontLeft + 'px';
    back.style.top = backTop + 'px';
    back.style.left = backLeft + 'px';

    imageDiv.style.width = imageDivHeight + 'px';
    imageDiv.style.height = imageDivHeight + 'px';
}

// Not be resized when user change the window's size

// In front, If front(back) offsetWidth is shorter than offsetHeight, 
// should rearrange image and paragraph

function rotateToBack() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');

    front.style.transform = 'rotateY(180deg)'; // need to be modified
    front.style.zIndex = 0;
    front.style.visibility = "hidden";
    back.style.transform = 'rotateY(360deg)';
    back.style.zIndex = 1;
    back.style.visibility = "visible";
}

function rotateToFront() {
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');

    back.style.transform = 'rotateY(180deg)';
    back.style.zIndex = 0;
    back.style.visibility = "hidden";
    front.style.transform = 'rotateY(360deg)'; // need to be modified
    front.style.zIndex = 1;
    front.style.visibility = "visible";
}

// Should modify border-radius by function resize()
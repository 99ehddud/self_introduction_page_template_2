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

    let frontWidth = innerWidth * 0.6;
    let frontHeight = (innerHeight) * 0.6;
    let backWidth = innerWidth * 0.6;
    let backHeight = (innerHeight) * 0.6;

    main.style.width = innerWidth + 'px';
    main.style.height = (innerHeight) + 'px';
    
    front.style.width = frontWidth + 'px'; // need to be modified
    front.style.height = frontHeight + 'px'; // need to be modified
    front.style.top = (innerHeight - frontHeight)/2 + 'px';
    front.style.left = (innerWidth - frontWidth)/2 + 'px';
    
    back.style.width = backWidth + 'px'; // need to be modified
    back.style.height = backHeight + 'px'; // need to be modified
    back.style.top = (innerHeight - backHeight) / 2 + 'px';
    back.style.left = (innerWidth - backWidth) / 2 + 'px';

    imageDiv.style.width = (frontWidth / 2 ) + 'px';
    imageDiv.style.height = frontHeight + 'px';

    let pictureWidth = imageDiv.offsetWidth / 1.7;
    let pictureHeight = pictureWidth * 4 / 3;

    picture.style.width = pictureWidth + 'px';
    picture.style.height = pictureHeight + 'px';

    informationDiv.style.width = (frontWidth / 2) + 'px';
    informationDiv.style.height = frontHeight + 'px';

    let informTableWidth = backWidth * 0.8;
    let informTableHeight = backHeight * 0.8;
    let informTableMarginLeft = informTableWidth * 0.1;
    let tableLabelWidth = informTableWidth * 0.4;
    let tableContentWidth = informTableWidth * 0.6;
    
    informTable.style.width = informTableWidth + 'px';
    informTable.style.height = informTableHeight + 'px';
    informTable.style.marginLeft = informTableMarginLeft + 'px';
    tableLabel.style.width = tableLabelWidth + 'px';
    tableContent.style.width = tableContentWidth + 'px';
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
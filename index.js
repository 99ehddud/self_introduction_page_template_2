function resize() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    let footerHeight = footer.offsetHeight;

    main.style.width = innerWidth + 'px';
    main.style.height = (innerHeight-footerHeight) + 'px';
    footer.style.width = innerWidth + 'px';
}
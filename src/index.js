import './scss/base.scss'

const menu = document.querySelector('.menu-bars');
const bars = document.querySelector('.menu-bars');
const headerWrapper = document.querySelector('.header-wrapper');
const navlinks = document.querySelectorAll('.header-nav a')
const links = document.querySelectorAll(".more");
const parralax = document.querySelector('.parallax');
const parallaxTitle = document.querySelector('.parallax-title');


// **** Menu **** \\


//hide on init 
navlinks.forEach((item) => {
    item.addEventListener('click', () => {
        hideMenu()
    })
})


//function hide menu
function hideMenu() {
    headerWrapper.classList.remove('active');
    document.body.classList.remove('overflow-h')
    bars.classList.remove('change');
}

//function show menu
function showMenu() {
    headerWrapper.classList.toggle('active');
    document.body.classList.toggle('overflow-h')
    bars.classList.toggle('change');
}

//btn click show menu
menu.addEventListener('click', () => {

    showMenu()

});


//scroll behavior (behavior doesn't work on IOS) 

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}


// **** Parallax **** \\

function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parralax.style.transform = `translateY(${scrollTop * 0.2}px)`;
    parallaxTitle.style.transform = `translateY(${scrollTop * -0.3}px)`;
}

window.addEventListener('scroll', scrollParallax)
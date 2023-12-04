const nav = document.querySelectorAll('.nav-categories-div');
let navActive = document.querySelector('.nav-active');
const navCategories = document.querySelector('.nav-categories');
const navLinksContainer = document.querySelector('.nav-links-container');

let temp2 = document.querySelector('.temp2');

nav.forEach(e=> e.addEventListener('mouseenter',() => {
    removeNavActive();
    let y = document.querySelector(`.${e.id}-links-container`)
    y.classList.add('nav-active');
    navActive=y;

}));


temp2.addEventListener('mouseleave',removeNavActive);


function removeNavActive()
{
    if(navActive!=null){
        navActive.classList.remove('nav-active');
    }
}
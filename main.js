//header scroll color change

window.addEventListener('scroll', function(){
    var header= document.querySelector('header');
    header.classList.toggle('shadow',window.scrollY > 0);
})


// MENU

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    menu.classList.toggle('active');
}
// Remove Menu One Scroll
window.onscroll= () => {
    menu.classList.remove('bx bx');
    menu.classList.remove('active');
}
// Button increment and decrement

function totalClick (click)  {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt (totalClicks.innerText) + click;
    totalClicks.innerText= sumValue ;
    // Avoid negatives
    if(sumValue < 0) {
        totalClicks.innerText=0;
    }
    // reset value
    if(click===0)  {
        totalClicks.innerText= 0;
    }
}
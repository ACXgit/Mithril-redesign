// Progressively Collapsing Navigation Links
// https://github.com/VPenkov/okayNav-vanillaJS

var menu = document.getElementById('main-menu');
// var okaynav = new OkayNav(menu, {}); // [TODO] make it work


// Scroll to top control
// Adaptation of https://github.com/ArekSredzki/top-control

var backToTop = document.getElementById('back-to-top');

function animateTopControl() {
    if (window.pageYOffset >= 250) {
        if (!backToTop.classList.contains('visible')) {
            backToTop.classList.add('visible');
        }
    } else {
        backToTop.classList.remove('visible');
    }
}
window.onscroll = animateTopControl;
const navToggle = document.getElementById('nav-toggle');
const navBar = document.getElementById('navbar');
const body = document.body;

function closeMenu() {
    navBar.classList.remove('open');
    navToggle.classList.remove('open');
    body.classList.remove('open');
}

navToggle.addEventListener('click', function() {
    let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    navBar.classList.toggle('open');
    navToggle.classList.toggle('open');
    body.classList.toggle('open');
    navBar.style.top = scrollPosition + 'px';
});

let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
        closeMenu();
    })
})
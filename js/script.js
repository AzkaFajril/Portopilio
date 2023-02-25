const navbarNav = document.querySelector('.bandung-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

const Nav = document.querySelector('.bandung-nav');
document.querySelector('.hamburger-btn').onclick = () => {
    Nav.classList.toggle('hide')
}
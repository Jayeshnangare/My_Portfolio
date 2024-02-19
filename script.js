function toggleMenu(){
    const Menu = document.querySelector('.menu-links');
    const Icon = document.querySelector('.hamburger-icon');
    Menu.classList.toggle("open");
    Icon.classList.toggle("open");
}
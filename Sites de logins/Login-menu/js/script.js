const menu = document.querySelector('#menu');

function toggleMenu() {
    const dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('active');
}

menu.addEventListener('click', toggleMenu);

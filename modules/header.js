// Check if file is loaded
console.log('header.js loaded');

// Get the elements
const menuButton = document.getElementById('header_menu_button');
const closeButton = document.getElementById('header_menu_close');
const menu = document.querySelector('.header_menu');

// Function to open menu
function openMenu() {
    menu.style.display = 'block';
}

// Function to close menu
function closeMenu() {
    menu.style.display = 'none';
}

// Add event listeners
menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
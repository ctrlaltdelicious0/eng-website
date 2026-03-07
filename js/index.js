// Check if file is loaded
console.log('index.js loaded');

// Get the card elements
const card1 = document.getElementById('section_works_card_1');
const card2 = document.getElementById('section_works_card_2');
const card3 = document.getElementById('section_works_card_3');

// Add click event listeners
card1.addEventListener('click', function () {
    window.location.href = '../rpw.html';
});

card2.addEventListener('click', function () {
    window.location.href = '../rrf.html';
});

card3.addEventListener('click', function () {
    window.location.href = '../other.html';
});

// Make all elements with class 'section_reflection_p' unselectable
document.querySelectorAll('.section_reflection_p').forEach(element => {
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none'; // Safari support
    element.style.msUserSelect = 'none'; // IE/Edge support
    element.style.mozUserSelect = 'none'; // Firefox support
});
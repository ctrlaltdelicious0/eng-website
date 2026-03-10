// Check if file is loaded
console.log('rpw.js loaded');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get all the section card elements
    const card1 = document.getElementById('section_rpw_card_1');
    const card2 = document.getElementById('section_rpw_card_2');
    const card3 = document.getElementById('section_rpw_card_3');

    // Define the links
    const links = [
        'https://docs.google.com/document/d/1au-BFYeg7vuAdtGx3K_HCK5kJWtl2MudTd1fNEUI8LA/edit?usp=sharing',
        'https://docs.google.com/document/d/1ZAQsZeDXToNb_6P-uuFHlE9jsCP5kiYRyIvxhDpjiq4/edit?usp=sharing',
        'https://docs.google.com/document/d/1NXo815MBpwaCiS3Rzzvn8NkLWY9IMEVefKtVoNGdAYc/edit?usp=sharing'
    ];

    // Add click event listeners to each card
    if (card1) {
        card1.addEventListener('click', function () {
            window.open(links[0], '_blank');
        });
    }

    if (card2) {
        card2.addEventListener('click', function () {
            window.open(links[1], '_blank');
        });
    }

    if (card3) {
        card3.addEventListener('click', function () {
            window.open(links[2], '_blank');
        });
    }
});
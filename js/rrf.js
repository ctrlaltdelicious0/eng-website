// Check if file is loaded
console.log('rrf.js loaded');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the RRF card elements
    const rrfCard1 = document.getElementById('section_rrf_card_1');
    const rrfCard2 = document.getElementById('section_rrf_card_2');
    const rrfCard3 = document.getElementById('section_rrf_card_3');

    // Define the links
    const links = [
        'https://docs.google.com/document/d/1jD0hjyUA1oyWbUYukiibf6NGdd0nvHfCA-i8iwCDXnE/edit?usp=sharing',
        'https://docs.google.com/document/d/1c2SZkAk6E-eZMRl9ZkNwbKvnP2oX8cZazKTsz3e8gmI/edit?usp=sharing',
        'https://docs.google.com/document/d/1aKfTtRGZ8dmTriqcooDFw3a0FPmJBJuzMg-lHQRpGQM/edit?usp=sharing'
    ];

    // Add click event listeners to each card
    if (rrfCard1) {
        rrfCard1.addEventListener('click', function () {
            window.open(links[0], '_blank');
        });
    }

    if (rrfCard2) {
        rrfCard2.addEventListener('click', function () {
            window.open(links[1], '_blank');
        });
    }

    if (rrfCard3) {
        rrfCard3.addEventListener('click', function () {
            window.open(links[2], '_blank');
        });
    }
});
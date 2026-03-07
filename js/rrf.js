// Check if file is loaded
console.log('rrf.js loaded');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the RRF card elements
    const rrfCard2 = document.getElementById('section_rrf_card_2');
    const rrfCard3 = document.getElementById('section_rrf_card_3');

    // Define the links
    const links = [
        '', // Placeholder for index 0 (not used)
        '', // Placeholder for index 1 (not used)
        'https://docs.google.com/document/d/1c2SZkAk6E-eZMRl9ZkNwbKvnP2oX8cZazKTsz3e8gmI/edit?usp=sharing',
        'https://docs.google.com/document/d/1aKfTtRGZ8dmTriqcooDFw3a0FPmJBJuzMg-lHQRpGQM/edit?usp=sharing'
    ];

    // Add click event listeners to each card
    if (rrfCard2) {
        rrfCard2.addEventListener('click', function () {
            window.open(links[2], '_blank');
        });
        // Optional: Add cursor pointer to indicate it's clickable
        rrfCard2.style.cursor = 'pointer';
    }

    if (rrfCard3) {
        rrfCard3.addEventListener('click', function () {
            window.open(links[3], '_blank');
        });
        rrfCard3.style.cursor = 'pointer';
    }

});
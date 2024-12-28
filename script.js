document.addEventListener("DOMContentLoaded", function() {
    // Animate the logo zoom-in effect on page load
    const logo = document.querySelector('.hero img');
    logo.classList.add('zoom-in');

    // Animate the header slide-in effect
    const header = document.querySelector('header');
    header.classList.add('slide-in');

    // Add event listener for the search input to trigger focus animation
    const searchInput = document.querySelector('input');
    searchInput.addEventListener('focus', function() {
        searchInput.style.transform = 'scale(1.05)'; // Grow effect
        searchInput.style.borderColor = '#d32f2f'; // Darker red
    });

    searchInput.addEventListener('blur', function() {
        searchInput.style.transform = 'scale(1)'; // Reset grow effect
        searchInput.style.borderColor = '#ff3b30'; // Original border color
    });

    // Add animation on typing in the search input
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        if (query.length >= 3) {
            // You could trigger some action based on the input
            console.log(`User is typing: ${query}`);
        }
    });
});

// Function to load HTML content dynamically
function loadContent(section) {
    const contentDiv = document.getElementById('content');
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(html => contentDiv.innerHTML = html)
        .catch(err => console.log('Failed to load section:', err));
}

// Set up event listeners for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default link behavior
        e.preventDefault();

        // Get the target section ID
        const section = this.getAttribute('href').substring(1);

        // Load the content for the clicked section
        loadContent(section);
    });
});

// Load default section (home) on page load
window.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});

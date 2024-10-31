function loadCareerSection(section) {
    // Hide the buttons
    document.querySelector('.buttons_career').style.display = 'none';

    // Hide all sections
    const sections = document.querySelectorAll('.career-section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

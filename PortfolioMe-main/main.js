
// Toggle navbar on hamburger click
document.getElementById("hamburger").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

// Hide the navbar when clicking outside
document.addEventListener("click", function(event) {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");

    // Check if the click is outside the navbar and the hamburger
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove("active"); // Hide the navbar
    }
});

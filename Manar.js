// Select the toggle button
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;
// Listen for button clicks to toggle dark mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    console.log("Mode toggled");

    // Optional: Store the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Optional: Load the user's theme preference on page load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
});
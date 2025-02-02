// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
// gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
// gsap.from(".cta", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
    } else {
        themeToggle.textContent = "☀️"; // Sun icon for light mode
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");

        // Save the theme preference in local storage
        if (body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙"; // Moon icon
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️"; // Sun icon
        }
    });
});



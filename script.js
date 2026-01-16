// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Hover targets
const hoverTargets = document.querySelectorAll(
    "a, button, .card, .skill"
);

hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});
// const observerOptions = { threshold: 0.2 };
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
// Scroll reveal animation
// const reveals = document.querySelectorAll(".reveal");

// window.addEventListener("scroll", () => {
//     reveals.forEach(el => {
//         const windowHeight = window.innerHeight;
//         const elementTop = el.getBoundingClientRect().top;
//         if (elementTop < windowHeight - 100) {
//             el.classList.add("active");
//         }
//     });
// });
// Lumen & Lens - small interactive enhancements
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const backToTop = document.querySelector(".back-to-top");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
// Set the footer year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
// Open and close the mobile navigation.
menuButton.addEventListener("click", () => {
const isOpen = navigation.classList.toggle("open");
menuButton.setAttribute("aria-expanded", isOpen);
menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
// Close the mobile navigation after a visitor chooses a section.
navigation.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
navigation.classList.remove("open");
menuButton.setAttribute("aria-expanded", "false");
});
});
// Show a simple back-to-top button after the hero section.
window.addEventListener("scroll", () => {
backToTop.classList.toggle("visible", window.scrollY > 600);
});
backToTop.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
// Demo-only contact form behavior. Replace this with Formspree, Netlify Forms,
// or your own server endpoint when you are ready to receive real inquiries.
contactForm.addEventListener("submit", (event) => {
event.preventDefault();
const name = new FormData(contactForm).get("name");
formMessage.textContent = `Thanks, ${name}! Your inquiry is ready to send.`;
contactForm.reset();
});

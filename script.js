var typed = new Typed(".typing", {
    strings: [
        "B.Tech CSE Student",
        "Web Developer",
        "Python Programmer",
        "Future Google Engineer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = "☀️";
    } else {
        themeToggle.innerHTML = "🌙";
    }
});

ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: false
});

ScrollReveal().reveal(".hero", { origin: "top" });
ScrollReveal().reveal("#about", { origin: "left" });
ScrollReveal().reveal("#skills", { origin: "right" });
ScrollReveal().reveal("#projects", { origin: "bottom" });
ScrollReveal().reveal("#contact", { origin: "top" });

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});
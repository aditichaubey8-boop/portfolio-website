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
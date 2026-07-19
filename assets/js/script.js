function setCopyright() {
    const copyright = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    let copyrightText = `© ${currentYear} Shubham Choudhury. All Rights Reserved.`;
    copyright.textContent = copyrightText;
}

const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    const dark = document.body.classList.contains("dark-theme");

    toggle.textContent = dark ? "☀️" : "🌙";

    localStorage.setItem("theme", dark ? "dark" : "light");

});

function init() {
    setCopyright();
}

// Entry point
document.addEventListener("DOMContentLoaded", init);


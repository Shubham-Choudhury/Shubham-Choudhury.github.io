function setCopyright() {
    const copyright = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    let copyrightText = `© ${currentYear} Shubham Choudhury. All Rights Reserved.`;
    copyright.textContent = copyrightText;
}

function init() {
    setCopyright();
}

// Entry point
document.addEventListener("DOMContentLoaded", init);
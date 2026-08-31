/* MOBILE PHONE TOGGLE*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


/* CLOSE MENU AFTER CLICKING LINK */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});


/* DYNAMIC CURRENT YEAR */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ACTIVE NAV LINK HIGHLIGHT ON SCROLL */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    sections.forEach(function (current) {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");
        const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.style.color = "var(--dark-blue)";
                navItem.style.fontWeight = "600";
            } else {
                navItem.style.color = "var(--text)";
                navItem.style.fontWeight = "400";
            }
        }
    });
});

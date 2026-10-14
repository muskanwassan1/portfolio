// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

if (menu) {

    menu.addEventListener("click", () => {

        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";

            nav.style.position = "absolute";
            nav.style.top = "76px";
            nav.style.left = "0";
            nav.style.width = "100%";
            nav.style.padding = "25px";
            nav.style.flexDirection = "column";
            nav.style.background = "#080b10";
            nav.style.borderBottom = "1px solid #202832";
        }

    });

}


// ===============================
// SCROLL REVEAL
// ===============================

const elements = document.querySelectorAll(
    ".info-box, .skill-category, .project, .timeline-item, .social-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);

elements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const year = new Date().getFullYear();

console.log("Jawwad Khan Portfolio - " + year);
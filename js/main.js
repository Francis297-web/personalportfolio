/* ===================================================
   NEXORA PORTFOLIO - INTERACTIONS ENGINE
===================================================*/

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.8s ease";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 2500);
    }
});


/* =========================
   SMOOTH SCROLL (NAV LINKS)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
    ".hero, .about-card, .skill-card, .project-card, .timeline-item, form"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);


/* =========================
   TYPING EFFECT (HERO TITLE)
========================= */
const typingElement = document.querySelector(".hero-text h1");

if (typingElement) {

    const text = typingElement.innerText;
    typingElement.innerText = "";

    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            typingElement.innerText += text.charAt(i);
            i++;
            setTimeout(typeEffect, 60);
        }
    }

    typeEffect();
}

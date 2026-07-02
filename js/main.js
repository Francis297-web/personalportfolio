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
    ".hero, .about-card, .skill-card, .project-card, .timeline-item, form, .blog-card, .testimonial-card"
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

/* =========================
   BACK TO TOP
========================= */
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn?.classList.add("show");
    } else {
        backToTopBtn?.classList.remove("show");
    }
});

backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector("button");
        const originalText = btn.textContent;
        btn.textContent = "✓ Message Sent!";
        btn.style.background = "#10b981";
        contactForm.reset();
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
        }, 3000);
    });
}

/* =========================
   NEWSLETTER FORM
========================= */
const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = newsletterForm.querySelector("button");
        const originalText = btn.textContent;
        btn.textContent = "✓ Subscribed!";
        btn.style.background = "#10b981";
        newsletterForm.reset();
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
        }, 3000);
    });
}

/* =========================
   THEME TOGGLE
========================= */
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

function updateThemeIcon(theme) {
    if (theme === "light") {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle?.addEventListener("click", () => {
    const theme = htmlElement.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

/* =========================
   ANALYTICS TRACKING
========================= */
function trackEvent(eventName, eventData) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {
    btn.addEventListener("click", () => {
        trackEvent("button_click", {
            button_text: btn.textContent.trim()
        });
    });
});
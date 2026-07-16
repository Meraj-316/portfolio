// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// =========================
// TYPING EFFECT
// =========================

const typingElement = document.getElementById("typing");

const words = [
    "AI & Data Science Student",
    "Web Developer",
    "Python Programmer",
    "Future AI Engineer",
    "UI/UX Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 120);

}

typingEffect();


// =========================
// MOUSE GLOW
// =========================

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// =========================
// NAVBAR BACKGROUND
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(5,15,30,.85)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background =
            "rgba(5,15,30,.45)";

        header.style.boxShadow =
            "none";

    }

});

// =========================
// SMOOTH BUTTON HOVER
// =========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});
// =========================
// FLOATING PARTICLES
// =========================

const particles = document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 12) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particle.style.transform =
        `scale(${0.5 + Math.random()})`;

    particles.appendChild(particle);

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".glass-card, .section-title, .section-subtitle, .timeline-item"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 120) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition =
        "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// SKILL CIRCLE ANIMATION
// =========================

const circles =
    document.querySelectorAll(".circle");

function animateSkills() {

    circles.forEach(circle => {

        const rect =
            circle.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            const progress =
                circle.querySelector(".progress");

            const percent =
                circle.dataset.percent;

            const radius = 60;

            const circumference =
                2 * Math.PI * radius;

            progress.style.strokeDasharray =
                circumference;

            progress.style.strokeDashoffset =
                circumference -
                (percent / 100) * circumference;

        }

    });

}

window.addEventListener(
    "scroll",
    animateSkills
);

animateSkills();

// =========================
// PROJECT CARD HOVER EFFECT
// =========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,217,255,.18),
            rgba(255,255,255,.05) 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.08)";

    });

});

// =========================
// IMAGE HOVER ANIMATION
// =========================

const profile =
    document.querySelector(".profile-card");

profile.addEventListener("mousemove", e => {

    const rect =
        profile.getBoundingClientRect();

    const x =
        (e.clientX - rect.left - rect.width / 2) / 20;

    const y =
        (e.clientY - rect.top - rect.height / 2) / 20;

    profile.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});
// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

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

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});

// =========================
// FADE-IN ON PAGE LOAD
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// =========================
// PARALLAX HERO EFFECT
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.scrollY * 0.3;

    hero.style.backgroundPositionY = offset + "px";

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log("%cWelcome to Meraj Parveen's Portfolio 🚀",
"color:#00d9ff;font-size:18px;font-weight:bold;");
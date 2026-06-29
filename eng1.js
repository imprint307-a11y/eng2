// Initialize AOS animations
AOS.init({
  duration: 900,
  once: true,
  offset: 80
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// Dark / light mode
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("portfolio-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("portfolio-theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Navbar shadow effect on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Simple contact form interaction
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you! Your message has been prepared. Please connect this form to an email service or backend.");

  contactForm.reset();
});

// Animated counter effect
const counters = document.querySelectorAll(".stat-box h3");
let counterStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const text = counter.innerText;
    const target = parseInt(text.replace(/\D/g, ""));
    const suffix = text.replace(/[0-9]/g, "");
    let current = 0;

    const speed = 35;
    const increment = Math.max(1, Math.floor(target / 40));

    const updateCounter = () => {
      current += increment;

      if (current >= target) {
        counter.innerText = target + suffix;
      } else {
        counter.innerText = current + suffix;
        setTimeout(updateCounter, speed);
      }
    };

    updateCounter();
  });
}

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats-section");
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !counterStarted) {
    counterStarted = true;
    animateCounters();
  }
});
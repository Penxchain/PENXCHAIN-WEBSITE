// Toast logic
const toast = document.getElementById("coming-soon-toast");
const soonButtons = document.querySelectorAll(".coming-soon-btn");

soonButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const type = btn.getAttribute("data-type");
    let message = "";

    if (type === "wallet") {
      message = "🚀 PENXCHAIN Wallet is Coming Soon!";
    } else if (type === "marketplace") {
      message = "🛒 Marketplace access is Coming Soon!";
    } else {
      message = "✨ Coming Soon!";
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 4000);
  });
});

// Active nav link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const defaultLink = document.querySelector(".nav-link[href='index.html']");

  if (defaultLink) defaultLink.classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Mobile nav
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open");
});

// Users counter
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  updateCount();
});

// Sparkle effect
const sparklesContainer = document.getElementById("sparkles-container");

for (let i = 0; i < 25; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.bottom = "-20px";
  sparkle.style.animationDuration = 4 + Math.random() * 2 + "s";
  sparkle.style.animationDelay = Math.random() * 5 + "s";
  sparklesContainer.appendChild(sparkle);
}

// Testimonials typing effect
const testimonials = [
  "“PENXCHAIN is the future of privacy.” — <strong>Sarah A.</strong>",
  "“I use the marketplace every day.” — <strong>Oluwasegun D.</strong>",
  "“My wallet has never felt safer.” — <strong>Isabella R.</strong>",
  "“I love the UI/UX of PENXCHAIN!” — <strong>Marvelee</strong>",
  "“Fast, secure, and user-friendly.” — <strong>James T.</strong>",
  "“The best platform for real decentralization.” — <strong>Chen Li</strong>",
  "“Smooth experience across devices.” — <strong>Fatima Y.</strong>",
  "“Trustworthy and innovative.” — <strong>Kofi A.</strong>",
  "“Amazing community and support.” — <strong>Grace O.</strong>",
  "“This is the next big thing.” — <strong>Diego F.</strong>"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const textEl = document.getElementById("testimonial");

function typeEffect() {
  const currentText = testimonials[index];

  charIndex += isDeleting ? -1 : 1;
  textEl.innerHTML = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
      setTimeout(typeEffect, 50);
    }, 3000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % testimonials.length;
  }

  setTimeout(typeEffect, isDeleting ? 20 : 40);
}

typeEffect();

// Intersection Observer for featured text
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".featured-text h3, .featured-text p").forEach(el => {
  observer.observe(el);
});

// Wallet slider
const walletSlider = document.getElementById("wallet-slider");
const walletDots = document.querySelectorAll(".wallet-dot-indicators .dot");

walletSlider.addEventListener("scroll", () => {
  const scrollLeft = walletSlider.scrollLeft;
  const totalScroll = walletSlider.scrollWidth - walletSlider.clientWidth;
  const sectionCount = walletDots.length;

  const percent = scrollLeft / totalScroll;
  const activeIndex = Math.round(percent * (sectionCount - 1));

  walletDots.forEach((dot, idx) => dot.classList.toggle("active", idx === activeIndex));
});

walletDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const width = walletSlider.querySelector("img").clientWidth + 16;
    walletSlider.scrollTo({ left: width * index, behavior: "smooth" });
  });
});

// Marketplace slider
const slider = document.getElementById("marketplace-slider");
const dots = document.querySelectorAll(".dot");

slider.addEventListener("scroll", () => {
  const scrollLeft = slider.scrollLeft;
  const slideWidth = slider.scrollWidth / dots.length;
  const activeIndex = Math.round(scrollLeft / slideWidth);

  dots.forEach((dot, idx) => dot.classList.toggle("active", idx === activeIndex));
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const width = slider.querySelector("img").clientWidth + 24;
    slider.scrollTo({ left: width * index, behavior: "smooth" });
  });
});

// Footer year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Dynamic user counter
let currentCount = 27;
const maxCount = 99;
const counterElement = document.getElementById('user-count');

const getRandomTime = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const incrementCounter = () => {
  if (currentCount >= maxCount) return;

  currentCount++;
  counterElement.textContent = currentCount;

  const nextDelay = getRandomTime(1000, 10000);
  setTimeout(incrementCounter, nextDelay);
};

setTimeout(incrementCounter, getRandomTime(2000, 4000));

// Featured products – responsive width attribute
document.body.setAttribute('data-width', window.innerWidth);
window.addEventListener('resize', () => {
  document.body.setAttribute('data-width', window.innerWidth);
});

// Reveal animation for cards
const cards = document.querySelectorAll(".penx-card");

function revealCards() {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

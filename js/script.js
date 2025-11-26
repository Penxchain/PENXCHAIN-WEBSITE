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

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  });
});

// js/activeLink
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");

    // Set 'Home' as default active on load
    const defaultLink = document.querySelector(".nav-link[href='index.html']");
    if (defaultLink) defaultLink.classList.add("active");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
});


//Users counter
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20); // 20ms = smooth speed
        } else {
            counter.innerText = target.toLocaleString(); // comma format
        }
    };

    updateCount();
});

// Select the download button
const downloadBtn = document.querySelector(".special-download");

// Add click sound
const clickSound = new Audio("sounds/click.mp3"); 

downloadBtn.addEventListener("click", e => {
    // Play sound
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
    console.log("Download Wallet button clicked!");
});

//Sparkle effect

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

// Reviews typing:

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
let currentText = "";
let isDeleting = false;
const textEl = document.getElementById("testimonial");

function typeEffect() {
    currentText = testimonials[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textEl.innerHTML = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
            isDeleting = true;
            setTimeout(typeEffect, 50);
        }, 3000); // wait before deleting
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % testimonials.length;
    }

    const speed = isDeleting ? 20 : 40;
    setTimeout(typeEffect, speed);
}

typeEffect(); // Run it!

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll(".featured-text h3, .featured-text p").forEach(el => {
  observer.observe(el);
});

//PENXCHAIN Wallet Overview JS
const walletSlider = document.getElementById("wallet-slider");
const walletDots = document.querySelectorAll(".wallet-dot-indicators .dot");

walletSlider.addEventListener("scroll", () => {
  const scrollLeft = walletSlider.scrollLeft;
  const totalScroll = walletSlider.scrollWidth - walletSlider.clientWidth;
  const sectionCount = walletDots.length;

  const percent = scrollLeft / totalScroll;
  const activeIndex = Math.round(percent * (sectionCount - 1));

  walletDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });
});
walletDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const imageWidth = walletSlider.querySelector("img").clientWidth + 16;
    walletSlider.scrollTo({
      left: imageWidth * index,
      behavior: "smooth"
    });
  });
});

// Marketplace-slider Js
const slider = document.getElementById("marketplace-slider");
const dots = document.querySelectorAll(".dot");

slider.addEventListener("scroll", () => {
  const scrollLeft = slider.scrollLeft;
  const slideWidth = slider.scrollWidth / dots.length;

  // Calculate active index based on scroll
  const activeIndex = Math.round(scrollLeft / slideWidth);

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const imageWidth = slider.querySelector("img").clientWidth + 24; // 24px ≈ gap
    slider.scrollTo({
      left: imageWidth * index,
      behavior: "smooth"
    });
  });
});
// Footer - year
  document.getElementById("current-year").textContent = new Date().getFullYear();

.badge-container { display: inline-block; margin-bottom: 24px; } 
.badge { background-color: rgb(19, 19, 87); 
color: #3b82f6; 
padding: 8px 16px; border-radius: 50px; 
font-weight: 600; 
font-size: 0.9rem;
display: flex; 
align-items: center; 
gap: 8px; 
border: 1px solid rgba(59, 130, 246, 0.3); /* The Breathing Animation Applied Here */ animation: breathe 3s infinite ease-in-out; }
/* Animation Keyframes */ 
@keyframes breathe { 0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); transform: scale(1); } 50% { box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.2); /* The glow */ transform: scale(1.02); /* Subtle pop */ } 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); transform: scale(1); } }
  
 h1 { font-size: 3.5rem;
font-weight: 800; color: #ffffff; /* White text as requested */ line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.02em; } .highlight-blue { color: #3b82f6; /* Keeping the blue consistent */ } /* 3. THE SUBTEXT */ p.description { color: #9ca3af; /* A soft gray for readability against dark bg */ font-size: 1.125rem; line-height: 1.6; margin-bottom: 40px; max-width: 650px; margin-left: auto; margin-right: auto; } /* 4. SOCIAL PROOF (The Counter) */ .social-proof { display: flex; justify-content: center; align-items: center; gap: 10px; color: #3b82f6; font-weight: 600; font-size: 1rem; } .icon-group { display: flex; color: #3b82f6; font-size: 1.2rem; } 
/* Responsive tweaks for mobile */
 @media (max-width: 600px) { h1 { font-size: 2.5rem; } p.description { font-size: 1rem; } }

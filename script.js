// Typewriter Effect - Continuous Loop
const typewriterElement = document.getElementById('typewriter');
const texts = [
    "Hello, I'm Ian Jay Balce",
    "Web Developer",
    "Creative Designer",
    "BSIS Student at CNSC"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed = 50;
    }

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before next text
    }

    setTimeout(typeWriter, typeSpeed);
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Project Images Handler - Dynamically Set Background Images
const projectImages = {
    'Pass CSE Application': 'image/PassCSEApp.png',
    'Liham Cafe Website V2': 'image/LihamV2.png',
    'Liham-Cafe Website.V.1': 'image/lihamV1.png',
    'Personal Portfolio': 'image/lihamV1.png'
};

function loadProjectImages() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectTitle = card.querySelector('.project-info h3').textContent;
        const projectImageDiv = card.querySelector('.project-image');
        
        // Find matching image by checking if title includes key words
        let imagePath = null;
        if (projectTitle.includes('Pass CSE')) {
            imagePath = 'image/PassCSEApp.png';
        } else if (projectTitle.includes('V2') || projectTitle.includes('V.2')) {
            imagePath = 'image/LihamV2.png';
        } else if (projectTitle.includes('V.1') || projectTitle.includes('V1')) {
            imagePath = 'image/lihamV1.png';
        }
        
        if (imagePath) {
            // Create an image to check if it loads
            const img = new Image();
            img.onload = function() {
                projectImageDiv.style.backgroundImage = `url('${imagePath}')`;
                projectImageDiv.style.backgroundSize = 'cover';
                projectImageDiv.style.backgroundPosition = 'center';
            };
            img.onerror = function() {
                console.warn(`Failed to load image: ${imagePath}`);
                // Keep the gradient background as fallback
            };
            img.src = imagePath;
        }
    });
}

// Option 2: If you prefer to use <img> tags instead of background images
function loadProjectImagesAsElements() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectTitle = card.querySelector('.project-info h3').textContent;
        const projectImageDiv = card.querySelector('.project-image');
        
        let imagePath = null;
        if (projectTitle.includes('Pass CSE')) {
            imagePath = 'PassCSEApp.png';
        } else if (projectTitle.includes('V2') || projectTitle.includes('V.2')) {
            imagePath = 'LihamV2.png';
        } else if (projectTitle.includes('V.1') || projectTitle.includes('V1')) {
            imagePath = 'lihamV1.png';
        }
        
        if (imagePath) {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = projectTitle;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            img.onerror = function() {
                console.warn(`Failed to load image: ${imagePath}`);
            };
            
            // Clear existing background and add image
            projectImageDiv.style.background = 'none';
            projectImageDiv.appendChild(img);
        }
    });
}

// Load images when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Use Option 1 (background images) by default
    loadProjectImages();
    
    // OR use Option 2 (img elements) - uncomment the line below and comment the line above
    // loadProjectImagesAsElements();
});
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

themeToggle.addEventListener('click', () => {
    const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const menuIcon = mobileMenu.querySelector('i');
    menuIcon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').className = 'fas fa-bars';
    });
});

// Name Color Toggle
const colorToggle = document.getElementById('colorToggle');
const logo = document.querySelector('.logo');
const heroName = document.querySelector('.hero-content h1 .typewriter');

colorToggle.addEventListener('click', () => {
    colorToggle.classList.toggle('active');
    logo.classList.toggle('rainbow-name');
    if (heroName) {
        heroName.classList.toggle('rainbow-name');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Message sent successfully! I\'ll get back to you soon.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Scroll Reveal Animations
    const sr = ScrollReveal({
        distance: '40px',
        duration: 1500,
        reset: true
    });

    sr.reveal('.timeline-item', { origin: 'left', interval: 200 });
    sr.reveal('.process-step', { origin: 'bottom', interval: 200 });
    sr.reveal('.product-card', { origin: 'bottom', interval: 200 });

    // Section Hover Effect
    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            this.style.transform = `rotate3d(${y}, ${x}, 0, 2deg)`;
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Window Event Listeners
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const storySection = document.getElementById('story');
    const header = document.querySelector('.header');

    // Navbar Scroll Effects
    if (nav && storySection) {
        const storyOffset = storySection.offsetTop - 100;
        nav.classList.toggle('scrolled', window.pageYOffset > storyOffset);
    }

    // Parallax Effect
    if (header) {
        header.style.backgroundPositionY = -(window.pageYOffset * 0.5) + 'px';
    }

    // Close mobile menu on scroll
    const activeMenu = document.querySelector('.nav-links.active');
    const hamburger = document.querySelector('.hamburger');
    if (activeMenu && hamburger) {
        activeMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Coffee Bean Animation
function createCoffeeBean() {
    const bean = document.createElement('img');
    bean.src = 'assets/img/coffee_bean.png';
    bean.alt = 'Coffee bean';
    bean.style.position = 'fixed';
    bean.style.width = '25px';
    bean.style.left = Math.random() * 100 + 'vw';
    bean.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    // bean.style.zIndex = '9999';
    bean.style.zIndex = '10';
    bean.style.pointerEvents = 'none';
    document.body.appendChild(bean);

    setTimeout(() => bean.remove(), 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    from { 
        top: -20px; 
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
    to { 
        top: 100vh; 
        opacity: 0;
        transform: rotate(360deg) scale(0.5);
    }
}`;
document.head.appendChild(style);

// Start animation
setInterval(createCoffeeBean, 300);
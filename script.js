document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Implementation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
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

    // Paper Hover Effect
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
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Window-scoped events
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const storySection = document.getElementById('story');
    
    if (nav && storySection) {
        const storyOffset = storySection.offsetTop - 100;
        
        if (window.pageYOffset > storyOffset) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    
    // Parallax effect
    const header = document.querySelector('.header');
    if (header) {
        header.style.backgroundPositionY = -(window.pageYOffset * 0.5) + 'px';
    }

    // Close menu on scroll
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
    bean.src = 'assets/img/coffee_bean.png'; // Path to your image
    bean.alt = 'Coffee bean';
    bean.style.position = 'fixed';
    bean.style.width = '25px'; // Adjust size as needed
    // bean.style.height = '25px';
    bean.style.left = Math.random() * 100 + 'vw';
    bean.style.animation = 'fall ' + (Math.random() * 3 + 2) + 's linear';
    // bean.style.zIndex = '9999';
    bean.style.zIndex = '10';
    bean.style.pointerEvents = 'none';
    document.body.appendChild(bean);

    setTimeout(() => bean.remove(), 5000);
}

// Add animation keyframes dynamically
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
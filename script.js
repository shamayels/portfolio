// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const faders = document.querySelectorAll('.section, .timeline-item, .project-card, .skill-category');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    fader.classList.add('fade-in');
    appearOnScroll.observe(fader);
});

// Parallax effect for hero shapes
document.addEventListener('mousemove', (e) => {
    const mainGlass = document.querySelector('.main-glass');
    const orb = document.querySelector('.glow-orb');
    
    if(!mainGlass || !orb) return;
    
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    mainGlass.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px) rotate(10deg)`;
    orb.style.transform = `translate(${mouseX * -30}px, ${mouseY * -30}px) scale(1.2)`;
});

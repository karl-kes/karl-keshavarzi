// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add slight random rotations to elements for more organic feel
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.social-link, .nav-links a');
    elements.forEach((el, index) => {
        const randomRotation = (Math.random() - 0.5) * 2; // -1 to 1 degree
        el.style.transform = `rotate(${randomRotation}deg)`;
        
        el.addEventListener('mouseenter', () => {
            const hoverRotation = (Math.random() - 0.5) * 3;
            el.style.transform = `rotate(${hoverRotation}deg) scale(1.05) translateY(-3px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = `rotate(${randomRotation}deg) scale(1)`;
        });
    });

    // Add some subtle movement to the profile photo
    const profilePhoto = document.querySelector('.profile-photo');
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
        
        profilePhoto.style.transform = `rotate(-2deg) translate(${mouseX}px, ${mouseY}px)`;
    });
});
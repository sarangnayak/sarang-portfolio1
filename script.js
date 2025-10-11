// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-description', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.hero-buttons', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.3');

    // Floating elements animation
    gsap.to('.floating-element', {
        y: 'random(-50, 50)',
        x: 'random(-30, 30)',
        rotation: 'random(-30, 30)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
    });

    // Section animations with ScrollTrigger
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Skill bars animation
    gsap.utils.toArray('.skill-progress').forEach(progress => {
        const skillLevel = progress.getAttribute('data-skill');
        gsap.to(progress, {
            scrollTrigger: {
                trigger: progress,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            width: `${skillLevel}%`,
            duration: 1.5,
            ease: 'power3.out'
        });
    });

    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Navigation scroll behavior
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetSection,
                    offsetY: 70
                },
                ease: 'power3.inOut'
            });

            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('active');
        });
    });

    // Scroll indicator click
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#about',
                offsetY: 70
            },
            ease: 'power3.inOut'
        });
    });

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            // Show success animation
            gsap.to('.btn-primary', {
                backgroundColor: '#27ae60',
                duration: 0.5,
                onComplete: () => {
                    setTimeout(() => {
                        gsap.to('.btn-primary', {
                            backgroundColor: '#C77DFF',
                            duration: 0.5
                        });
                    }, 2000);
                }
            });

            // Reset form
            this.reset();
            
            // Show success message (you can replace this with actual form submission)
            alert('Thank you for your message! I\'ll get back to you soon.');
        }
    });

    // Parallax effect for hero section
    gsap.to('.floating-elements', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });

    // Text animation for section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            text: '',
            duration: 2,
            ease: 'power3.out'
        });
    });

    // Hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Loading animation
    window.addEventListener('load', function() {
        gsap.to('body', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    // Set initial body opacity to 0 for loading effect
    gsap.set('body', { opacity: 0 });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add cursor follower
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--accent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
            ease: 'power2.out'
        });
    });

    document.addEventListener('mouseenter', () => {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
    });

    document.addEventListener('mouseleave', () => {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
       

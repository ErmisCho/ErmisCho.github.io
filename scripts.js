document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.section-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => revealObserver.observe(el));

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress');
    // Set initial transform to 0
    progressBars.forEach(bar => {
        bar.style.transform = 'scaleX(0)';
    });

    const progressCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.progress');
                bars.forEach(bar => {
                    bar.style.transform = 'scaleX(1)';
                });
            }
        });
    };

    const progressObserver = new IntersectionObserver(progressCallback, { threshold: 0.5 });
    const languageSection = document.querySelector('.language-card');
    if (languageSection) {
        progressObserver.observe(languageSection);
    }

    // Add mouse tracking hover effect to glass cards
    const cards = document.querySelectorAll('.card-hover');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set CSS variables for spotlight effect
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

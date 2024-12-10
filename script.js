document.addEventListener('DOMContentLoaded', function() {
    // Lazy Loading Images
    const images = document.querySelectorAll('img');
    const config = {
        rootMargin: '0px 0px 200px 0px', // Load images before they come into the viewport
        threshold: 0.01 // Load when 1% of the image is visible
    };

    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                const src = image.getAttribute('data-src');
                if (src) {
                    image.src = src;
                    image.removeAttribute('data-src');
                }
                observer.unobserve(image);
            }
        });
    }, config);

    images.forEach(image => {
        imageObserver.observe(image);
    });

    // Defer or Async loading of external scripts
    const scripts = [
        'https://unpkg.com/aos@2.3.4/dist/aos.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    ];

    scripts.forEach(scriptUrl => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true; // Async load to improve page load time
        document.body.appendChild(script);
    });

    // Initialize AOS (Animate On Scroll) after it has been loaded
    const initAOS = () => {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1200,
                once: true
            });
        }
    };

    // Check if AOS is loaded
    window.addEventListener('load', initAOS);

    // Defer the script execution to reduce blocking time on page load
    const deferScript = (url) => {
        const script = document.createElement('script');
        script.src = url;
        script.defer = true;
        document.body.appendChild(script);
    };

    // Call deferred scripts
    deferScript('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js');
});

// Add a loading spinner or message to improve perceived performance (optional)
document.addEventListener('load', function() {
    // Hide loading spinner when everything is loaded
    document.getElementById("loading-spinner").style.display = 'none';
});

// Example: Add a loading spinner in the HTML (in your index.html) that shows until everything is loaded.

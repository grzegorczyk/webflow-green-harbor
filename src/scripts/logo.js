// Function to update mainLogo class based on scroll position and section data attribute
function updateMainLogoClass() {
    let scrollPosition = window.scrollY;
    let targetElement = document.getElementById('mainLogo');
    const offset = 40;

    console.log("updateMainLogoClass START");

    // Handle adding/removing 'scroll' class based on scroll position
    if (scrollPosition > offset) {
        console.log("scrollPosition > offset TRUE");
        if (!targetElement.classList.contains('scroll')) {
            targetElement.classList.add('scroll');
        }
    } else {
        console.log("scrollPosition > offset FALSE");
        if (targetElement.classList.contains('scroll')) {
            targetElement.classList.remove('scroll');
        }
    }

    // Check each section to determine if it is in view and update logo class
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionTop + sectionHeight) {
            let logoClass = section.getAttribute('data-logo-class');
            console.log(logoClass);
            if (logoClass) {
                // Remove previously added logo-classes that were added from other sections
                targetElement.classList.forEach(className => {
                    if (className.startsWith('logo-')) {
                        targetElement.classList.remove(className);
                    }
                });
                // Add the new logo-class from the current section
                targetElement.classList.add(logoClass);
            }
        }
    });
}

// Event listeners for scroll, resize, and page load
window.addEventListener('scroll', updateMainLogoClass);
window.addEventListener('resize', updateMainLogoClass);
window.addEventListener('load', updateMainLogoClass);

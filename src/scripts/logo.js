// Event-Listener for mainLogo
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let targetElement = document.getElementById('mainLogo');
    const offset = 200;

    if (scrollPosition > offset) {
        if (!targetElement.classList.contains('scroll')) {
            targetElement.classList.add('scroll');
        }
    } else {
        if (targetElement.classList.contains('scroll')) {
            targetElement.classList.remove('scroll');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const animation = document.querySelector('.animation');

    function updateAnimation() {
        const activeItem = document.querySelector('.nav-item.active');
        const activeLink = activeItem.querySelector('.nav-link');
        const activeLinkRect = activeLink.getBoundingClientRect();
        const navListRect = document.querySelector('.nav-list').getBoundingClientRect();

        animation.style.width = `${activeLinkRect.width}px`;
        animation.style.left = `${activeLinkRect.left - navListRect.left}px`;
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.nav-item.active').classList.remove('active');
            item.classList.add('active');
            updateAnimation();
        });
    });

    window.addEventListener('resize', updateAnimation);

    updateAnimation();
});

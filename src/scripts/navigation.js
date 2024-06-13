document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const animation = document.querySelector('.animation');
    const offset = 200; // Offset von 200px
    let sections = [];

    // Dynamically get all sections based on nav links
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            sections.push(section);
        }
    });

    function updateAnimation() {
        const activeItem = document.querySelector('.nav-item.active');
        if (activeItem) {
            const activeLink = activeItem.querySelector('.nav-link');
            const activeLinkRect = activeLink.getBoundingClientRect();
            const navListRect = document.querySelector('.nav-list').getBoundingClientRect();

            animation.style.width = `${activeLinkRect.width}px`;
            animation.style.left = `${activeLinkRect.left - navListRect.left}px`;
        }
    }

    function setActiveNavItem() {
        let index = sections.length;

        while (--index && window.scrollY + offset < sections[index].offsetTop) {}

        navItems.forEach(item => item.classList.remove('active'));
        if (index >= 0) {
            navItems[index].classList.add('active');
        }
    }

    window.addEventListener('scroll', () => {
        setActiveNavItem();
        updateAnimation();
    });

    window.addEventListener('resize', updateAnimation);

    setActiveNavItem();
    updateAnimation();
});

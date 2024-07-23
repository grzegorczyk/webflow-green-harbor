document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const navbar = document.querySelector('.navbar');
    const animation = document.querySelector('.animation');
    const offset = 200; // Offset von 200px
    let sections = [];
    let currentActiveIndex = -1; // To store the current active section index
    let lastScrollY = window.scrollY; // To store the last scroll position

    let isHoveringOverNavbar = false;

    navbar.addEventListener('mouseenter', () => {
        isHoveringOverNavbar = true;
    });

    navbar.addEventListener('mouseleave', () => {
        isHoveringOverNavbar = false;
    });

    // Dynamically get all sections based on nav links
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            sections.push(section);
        }
    });

    // Set activ and scroll-direction class
    function setActiveNavItem() {
        let newActiveIndex = sections.length;
        const scrollDirection = window.scrollY > lastScrollY ? 'scroll-down' : 'scroll-up';

        while (--newActiveIndex >= 0 && window.scrollY + offset < sections[newActiveIndex].offsetTop) {}

        if (newActiveIndex !== currentActiveIndex) {
            navItems.forEach(item => {
                item.classList.remove('active', 'scroll-up', 'scroll-down');
            });

            if (newActiveIndex >= 0 && newActiveIndex < sections.length) {
                navItems[newActiveIndex].classList.add('active', scrollDirection);
                currentActiveIndex = newActiveIndex;
            }

            if (!isHoveringOverNavbar) {
                clearDivWidth();
            }
            updateActiveDivWidth();
        }
        lastScrollY = window.scrollY;

        // Check if the scroll position is in the top 200px
        if (window.scrollY < 200) {
            navbar.classList.add('start');
        } else {
            navbar.classList.remove('start');
        }
    }

    // Clear all div inline Width
    function clearDivWidth() {
        navItems.forEach(item => {
            const div = item.querySelector('div');
            if (div) {
                div.style.width = '';
            }
        });
    }

    // Set div width for activ Item
    function updateActiveDivWidth() {
        const activeItem = document.querySelector('.nav-item.active');
        if (activeItem) {
            const span = activeItem.querySelector('span');
            const div = activeItem.querySelector('div');
            if (span && div) { // Ensure aItem, span, and div exist
                const spanRect = span.getBoundingClientRect();
                div.style.width = `${spanRect.width}px`;
            }
        }

        setTimeout(setNavbarBackgroundWidth, 100); //todo: ohne timeout
    }

    // Set div width for each Item
    function updateAllDivWidths() {
        navItems.forEach(item => {
            const aItem = item.querySelector('a');
            const div = aItem.querySelector('div');
            const span = aItem.querySelector('span'); // Inneres span-Element
            const parentLi = item; // item selbst ist das li-Element

            if (aItem && div && span && !parentLi.classList.contains('active')) { // Ensure all elements exist and li doesn't have 'active' class
                const spanRect = span.getBoundingClientRect();
                div.style.width = `${spanRect.width}px`;
            }
        });
    }

    // Set Navbar Background Position on Scroll
    function checkNavbarBackgroundPostionOnScroll() {
        const navItems = document.querySelectorAll('.nav-item');
        let totalWidth = 0;

        for (let item of navItems) {
            if (item.classList.contains('active')) {
                break; // Stop the loop when we find the active item
            } else {
                const iItem = item.querySelector('i');
                if (iItem) {
                    const iItemRect = iItem.getBoundingClientRect();

                    totalWidth += iItemRect.width;
                }
            }
        }

        animation.style.left = `${totalWidth}px`;
    }

    // Set Navbar Background Position on Hover
    function checkNavbarBackgroundPostionOnHover() {
        const navItems = document.querySelectorAll('.nav-item');
        let totalWidth = 0;

        for (let item of navItems) {
            if (item.classList.contains('active')) {
                break; // Stop the loop when we find the active item
            } else {
                const iItem = item.querySelector('i');
                const spanItem = item.querySelector('span');
                if (iItem && spanItem) {
                    const iItemRect = iItem.getBoundingClientRect();
                    const spanItemRect = spanItem.getBoundingClientRect();

                    totalWidth += iItemRect.width + spanItemRect.width;
                }
            }
        }

        animation.style.left = `${totalWidth}px`;
    }

    // Set Navbar Background Width
    function setNavbarBackgroundWidth() {
        const activeItem = document.querySelector('.nav-item.active');
        if (activeItem) {
            const iItem = activeItem.querySelector('i');
            const span = activeItem.querySelector('span');
            if (iItem && span) { // Ensure aItem, span, and div exist
                const iItemRect = iItem.getBoundingClientRect();
                const spanRect = span.getBoundingClientRect();
                const navListRect = document.querySelector('.nav-list').getBoundingClientRect();

                animation.style.width = `${iItemRect.width + spanRect.width}px`;
            }
        }
    }

    window.addEventListener('scroll', () => {
        setActiveNavItem();
        if (!isHoveringOverNavbar) {
            checkNavbarBackgroundPostionOnScroll();
        } else {
            checkNavbarBackgroundPostionOnHover();
        }
    });

    window.addEventListener('resize', () => {
        clearDivWidth();
        updateActiveDivWidth();
        checkNavbarBackgroundPostionOnScroll();
    });

    navbar.addEventListener('mouseenter', () => {
        updateAllDivWidths();
        checkNavbarBackgroundPostionOnHover();
    });

    navbar.addEventListener('mouseleave', () => {
        clearDivWidth();
        updateActiveDivWidth();
        checkNavbarBackgroundPostionOnScroll();
    });

    setActiveNavItem();
    updateActiveDivWidth();
    //checkNavbarBackgroundPostionOnScroll();
    setTimeout(checkNavbarBackgroundPostionOnScroll, 100); //todo: ohne timeout
});

document.addEventListener("DOMContentLoaded", function() {
    // Elemente abrufen
    var navbarWrapper = document.getElementById("navbar-wrapper");
    var navbarBackWrapper = document.getElementById("navbar-back-wrapper");

    // Aktuellen URL-Pfad abrufen
    var path = window.location.pathname;

    // Überprüfen, ob der Pfad die Startseite ist
    if (path === "/" || path === "/index.html") {
        navbarWrapper.style.display = "inline-block";  // Element 1 anzeigen
    } else {
        navbarBackWrapper.style.display = "flex";  // Element 2 anzeigen
        navbarBackWrapper.onclick = function() {
            history.back();  // Zur vorherigen Seite zurückkehren
        };
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const localesItems = document.querySelectorAll('.w-locales-item');
    const circle = document.getElementById('_w-locales-circle');

    localesItems.forEach(localesItem => {
        localesItem.addEventListener('mouseover', (e) => {
            const localesItemRect = localesItem.getBoundingClientRect();
            const localesItemWrapper = localesItem.closest('.w-locales-items');
            const localesItemWrapperRect = localesItemWrapper.getBoundingClientRect();
            const leftPosition = localesItemRect.left - localesItemWrapperRect.left + 4;

            // Hier setzen wir den Stil des Pseudoelements ::after
            circle.style.left = `${leftPosition}px`;
        });
    });
});

document.querySelectorAll('.leistung-dropdown-switch').forEach(function(switchElement) {
    switchElement.addEventListener('click', function() {
        const content = switchElement.nextElementSibling;
        const afFontElement = switchElement.querySelector('.af-font');

        if (switchElement.classList.contains('clicked')) {
            // Wenn "leistung-dropdown-content" nicht null ist, dann remove class "clicked"
            if (content) {
                switchElement.classList.remove('clicked');
                if (afFontElement) {
                    afFontElement.classList.remove('clicked');
                }
            }
        } else {
            // Wenn "leistung-dropdown-content" nicht null ist, dann add class "clicked"
            if (content) {
                switchElement.classList.add('clicked');
                if (afFontElement) {
                    afFontElement.classList.add('clicked');
                }
            }
        }
    });
});

document.querySelectorAll('.leistung-dropdown-switch').forEach(function(switchElement) {
    switchElement.addEventListener('click', function() {
        if (switchElement.classList.contains('clicked')) {
            // Wenn "leistung-dropdown-content" nicht null ist, dann remove class "clicked"
            const content = switchElement.nextElementSibling;
            if (content) {
                switchElement.classList.remove('clicked');
            }
        } else {
            // Wenn "leistung-dropdown-content" null ist, dann add class "clicked"
            const content = switchElement.nextElementSibling;
            if (content) {
                switchElement.classList.add('clicked');
            }
        }
    });
});

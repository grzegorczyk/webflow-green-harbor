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

document.addEventListener("DOMContentLoaded", function() {
    // 1. Erstellung eines neuen HTML-Aufbaus
    const newTriggerPlace = document.querySelector('.leistung-trigger-wrapper');
    const newContentPlace = document.querySelector('.leistung-content-wrapper');

    const leistungDropdownItems = document.querySelectorAll('.leistungen-mobil .leistung-dropdown-item');

    leistungDropdownItems.forEach((item, index) => {
        // Erstellung der Trigger-Divs
        const trigger = document.createElement('div');
        trigger.classList.add('Leistung-Trigger-Item');
        trigger.setAttribute('data-index', index);
        trigger.innerHTML = item.querySelector('.leistung-dropdown-switch span div').innerHTML;
        newTriggerPlace.appendChild(trigger);

        // Erstellung der Content-Divs
        const content = document.createElement('div');
        content.classList.add('Leistung-Content-Item');
        content.setAttribute('data-index', index);
        content.innerHTML = item.querySelector('.leistung-dropdown-content').innerHTML;
        newContentPlace.appendChild(content);
    });

    // 2. Click-Events hinzufügen
    const triggers = document.querySelectorAll('.leistung-trigger-wrapper .leistung-trigger-item');
    const contents = document.querySelectorAll('.leistung-content-wrapper .leistung-content-item');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Entfernen der active-Klasse von allen Triggern und Contents
            triggers.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Hinzufügen der active-Klasse zum geklickten Trigger und dem passenden Content
            const index = this.getAttribute('data-index');
            this.classList.add('active');
            document.querySelector(`.Leistung-Content-Wrapper .Leistung-Content-Item[data-index='${index}']`).classList.add('active');
        });
    });
});

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
        trigger.classList.add('leistung-trigger-item');
        trigger.setAttribute('data-index', index);
        trigger.innerHTML = item.querySelector('.leistung-dropdown-switch span div').innerHTML;
        newTriggerPlace.appendChild(trigger);

        // Erstellung der Content-Divs
        const content = document.createElement('div');
        content.classList.add('leistung-content-item');
        content.setAttribute('data-index', index);
        content.innerHTML = item.querySelector('.leistung-dropdown-content .leistung-dropdown-inner').innerHTML;
        newContentPlace.appendChild(content);

        // Direktes Aktivieren des ersten Elements
        if (index === 0) {
            trigger.classList.add('active');
            content.classList.add('active');
        }
    });

    // 2. Click-Events hinzufügen
    const triggers = document.querySelectorAll('.leistung-trigger-wrapper .leistung-trigger-item');
    const contents = document.querySelectorAll('.leistung-content-wrapper .leistung-content-item');
    const bgForms = document.querySelectorAll('.leistung-content-wrapper-bg-form-1');

    const setHeightForBgForms = () => {
        const activeContent = document.querySelector('.leistung-content-wrapper-bg');
        const height = activeContent.offsetHeight;
        bgForms.forEach(bgForm => {
            bgForm.style.height = `${height}px`;
        });
    };

    // Höhe setzen für das initial aktive Element
    setHeightForBgForms();

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Entfernen der active-Klasse von allen Triggern und Contents
            triggers.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Hinzufügen der active-Klasse zum geklickten Trigger und dem passenden Content
            const index = this.getAttribute('data-index');
            this.classList.add('active');
            const activeContent = document.querySelector(`.leistung-content-wrapper .leistung-content-item[data-index='${index}']`);
            activeContent.classList.add('active');

            // Höhe setzen für das aktive Element
            setHeightForBgForms();
        });
    });
});



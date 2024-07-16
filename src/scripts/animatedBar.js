document.addEventListener('DOMContentLoaded', function() {
    // Inhalt des div#Headline-Animation-Code kopieren
    var sourceElement = document.getElementById('Headline-Animation-Code');
    var targetElement = document.getElementById('Headline-Animation-Code-Target');

    if (sourceElement && targetElement) {
        // Neuen Knoten mit dem kopierten Inhalt erstellen
        var newNode = document.createElement('div');
        newNode.className = 'headline-animation-code-copied'; // Hier die gewünschte Klasse angeben
        newNode.innerHTML = sourceElement.innerHTML;

        // Höhe des span#Headline-Animation-Code-Target messen
        var targetHeight = targetElement.offsetHeight;

        // Höhe inline an kopierter-inhalt hinzufügen
        newNode.style.height = targetHeight + 'px';

        // Den neuen Knoten direkt vor dem span#Headline-Animation-Code-Target platzieren
        targetElement.parentNode.insertBefore(newNode, targetElement);
    }
});
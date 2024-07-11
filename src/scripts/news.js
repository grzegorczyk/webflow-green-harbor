document.addEventListener("DOMContentLoaded", function() {
    // Alle div.news-teaser-list-item Elemente auswählen
    const teaserItems = document.querySelectorAll('div.news-teaser-list-item');

    // Durch alle ausgewählten Elemente iterieren
    teaserItems.forEach(function(teaserItem) {
        // Überprüfen, ob ein Element mit der Klasse news-teaser-basic-feat existiert
        const basicFeat = teaserItem.querySelector('.news-teaser-basic-feat');

        // Wenn ein solches Element existiert, überprüfen, ob es nicht die Klasse w-condition-invisible hat
        if (basicFeat && !basicFeat.classList.contains('w-condition-invisible')) {
            // Aktion ausführen (kann nach Bedarf angepasst werden)
            console.log('Element gefunden:', teaserItem);
        }
    });
});

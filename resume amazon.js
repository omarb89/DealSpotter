function getAmazonProductSummary() {
    // Extraire le titre du produit
    let title = document.getElementById('productTitle');
    title = title ? title.innerText.trim() : 'Titre non disponible';

    // Extraire le prix du produit
    let price = document.querySelector('.a-price .a-offscreen');
    price = price ? price.innerText.trim() : 'Prix non disponible';

    // Extraire la note du produit
    let rating = document.querySelector('span.a-icon-alt');
    rating = rating ? rating.innerText.trim() : 'Note non disponible';

    // Extraire la disponibilité du produit 
    //oui
    let availability = document.getElementById('availability');
    availability = availability ? availability.innerText.trim() : 'Disponibilité non disponible';

    // Créer le résumé du produit
    let summary = `Le produit "${title}" est disponible au prix de ${price}. Il a reçu une évaluation moyenne de ${rating}. Disponibilité : ${availability}.`;

    return summary;
}

// Exécuter la fonction et afficher le résumé
let productSummary = getAmazonProductSummary();
console.log(productSummary);

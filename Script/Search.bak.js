document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const recipeCards = Array.from(document.querySelectorAll(".recipe-card"));
    const container = document.querySelector(".recipe-container");

    searchInput.addEventListener("input", function() {
        console.log("Input event triggered");
        const searchTerm = searchInput.value.toLowerCase();
        const hiddenCards = [];

        recipeCards.forEach(function(card) {
            const recipeText = card.querySelector(".recipe-text").textContent.toLowerCase();
            
            if (recipeText.includes(searchTerm)) {
                card.removeAttribute("hidden"); 
                // Show the recipe card if it matches the search term
                
            } else {
                card.setAttribute("hidden", "hidden"); 
                // Mark the card for hiding if it doesn't match the search term
                hiddenCards.push(card);
            }
        });

        // Remove hidden cards from the container and reinsert visible cards in their place
        hiddenCards.forEach(function(card) {
            container.removeChild(card);
        });
        recipeCards.filter(card => !hiddenCards.includes(card)).forEach(function(card) {
            container.appendChild(card);
        });
    });
});

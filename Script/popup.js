window.addEventListener('DOMContentLoaded', () => {
    const recipes = document.querySelectorAll('.popular__recept__recipie a');
    const randomIndex = Math.floor(Math.random() * recipes.length);

    recipes.forEach((recipe, index) => {
        if (index !== randomIndex) {
            recipe.style.display = 'none'; // Hide other recipes
        }
    });
});

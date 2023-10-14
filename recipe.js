// Get references to HTML elements
const result = document.getElementById("result");
const searchButton = document.getElementById("search");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Add click event listener to the search button
searchButton.addEventListener("click", () => {
  // Get user input from the input field
  let userInput = document.getElementById("user-input").value;
  if (userInput.length == 0) {
    // Display a message if the user input is empty
    result.innerHTML = `<h3>Come on, pick your favorite recipe!</h3>`;
  } else {
    // Make a fetch request to the API with user input
    fetch(url + userInput)
      .then((response) => response.json())
      .then((data) => {
        // Extract data for the first meal
        let myMeal = data.meals[0];
        let count = 1;
        let ingredients = [];
        // Loop through meal properties to get ingredients and measures
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        // Display meal details and ingredients
        result.innerHTML = 
        `<img src=${myMeal.strMealThumb}>
         <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h4>${myMeal.strArea}</h4>
        </div>
        <div id="ingredient-con"></div>
        <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>
        </div>
        <button id="show-recipe">View Recipe</button>`;
        let ingredientCon = document.getElementById("ingredient-con");
        let parent = document.createElement("ul");
        let recipe = document.getElementById("recipe");
        let hideRecipe = document.getElementById("hide-recipe");
        let showRecipe = document.getElementById("show-recipe");
        // Create and display the list of ingredients
        ingredients.forEach((i) => {
          let child = document.createElement("li");
          child.innerText = i;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });
        // Add event listeners to show/hide recipe instructions
        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });
        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
      })
      .catch(() => {
        // Handle errors by displaying an "Invalid Input" message
        result.innerHTML = `<h3>Invalid Input</h3>`;
      });
  }
});

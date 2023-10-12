# Meal Recipe Searcher

![Screenshot 2023-06-24 at 9 29 56 PM](https://github.com/oscarabreu/RecipeApp/assets/99779654/1b5892f1-2d4d-4bb0-9cc7-f510a768cc81)

## Overview
A simple web application that allows users to search for a meal recipe and view its details.

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)
- [Key Code Features](#key-code-features)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Known Limitations](#known-limitations)
- [Possible Improvements](#possible-improvements)

## Features
- **Search for a Meal:** Users can input the name of a meal, and the app fetches its details.
- **Display Meal Details:** Once a meal is found, the app displays its image, name, area of origin, and list of ingredients.
- **View Recipe:** Users can click on a button to view the complete recipe and can also hide it.

## How It Works
1. The user enters the name of a meal in an input field.
2. After pressing the search button, the app queries the `themealdb` API using the provided meal name.
3. If the meal is found, it displays the meal's image, name, area, ingredients, and a button to view the complete recipe.
4. If the input is empty or the meal is not found, the app provides feedback to the user.

## Key Code Features
- **Fetching Data:** The app uses the Fetch API to make requests to the `themealdb` API.
- **Dynamic HTML Updates:** Depending on the API response, the innerHTML of the `result` element gets updated.
- **Event Listeners:** The app uses event listeners on the search, show recipe, and hide recipe buttons to facilitate interactivity.

## Dependencies
- **Themealdb API:** The application fetches data from `https://www.themealdb.com/api/json/v1/1/search.php?s=`, a public API for meal recipes.

## Usage
1. Ensure you have an internet connection.
2. Open the application in a web browser.
3. Enter a meal name in the input field.
4. Click the 'search' button.
5. View the meal's details, ingredients, and the complete recipe.

## Known Limitations
- The app currently fetches and displays only the first meal from the API response.
- The app assumes that the API response structure doesn't change.

## Possible Improvements
- Implement pagination or allow users to scroll through multiple meal results.
- Enhance the UI/UX design for a better user experience.



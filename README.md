![](kitchen-assist-logo.svg)

# Kitchen Assist

The purpose of this project is for me to practice integrating a 3rd party API into a React App.
API: [Edamam](https://developer.edamam.com/)

I switched from [spoonacular API](https://spoonacular.com/) to Edamam, because Edamam only limited my free account by the number of requests per minute (about 100 requests/min). With Spoonacular, the number of requests was limited to about 150 requests/day. I also liked that with Edamam I could get the title, image, ingredients, and nutrition information all in one call. With Spoonacular, if you want to search all recipes, you connect to one endpoint, and if you want to get the ingredients and instructions, you need to connect to another endpoint. The latter needing the ID found from the first endpoint. Since this is only for my own use and practice, I went with Edamam, even though it did not directly give the recipe instructions (it gives a URL to the instructions).

Below is a list of some things I would like to add in the app.

## TODO

### Grocery List

1. [ ] Search Groceries
2. [ ] Add, Delete, Mark Done Groceries
3. [ ] Add, Delete Multiple Lists
4. [ ] Filter Groceries/Lists

### Recipe Book

1. [x] ~~Search Recipes~~
2. [x] ~~Add, Delete Recipes~~
3. [ ] Add, Delete Multiple Books
4. [ ] Filter Recipes/Books
5. [x] ~~Overview Recipe: Name, Image, Servings and Calories of Recipe~~
6. [x] ~~Click on Recipe: Name, Image, Servings, Calories, Ingredients, and Steps(Link)~~

## References

1. I used some ideas from [TylerPottsDev](https://github.com/TylerPottsDev)'s awesome [card-flip](https://github.com/TylerPottsDev/card-flip). Learned about perspective, preserve-3d, and backface-visibility from this!

2. For transitions I recommend looking at [cubic-bezier!](https://cubic-bezier.com/). It is fun to test out different animations and tailor it exactly how you want.

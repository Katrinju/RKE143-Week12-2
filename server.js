const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRouter = require('./routes/randomRecipe.routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/fullRecipes', fullRecipesRouter);
app.use('/random', randomRouter);

// app.listen(3000, () => {
//     console.log('Server is running on Port 3000.');
// });

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
  });
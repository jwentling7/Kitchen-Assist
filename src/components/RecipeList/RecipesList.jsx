import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeFunctions from "../../helper/RecipeFunctions";
import "./RecipesList.scss";
import { Button } from "../styles/Button.style";

export default function RecipesList({ listType, list }) {
  const { recipeBook, saveRecipe, deleteRecipe, getList } = RecipeFunctions();

  return (
    <div className="recipes-list">
      {getList(listType, list).map((r) => (
        <div style={{ perspective: "1000px" }} key={r.key}>
          <RecipeCard recipe={r} />
          <div className="recipes-list__btns">
            {recipeBook.find((recipe) => recipe.key === r.key) ? (
              <>
                <p>Saved in Recipe Book.</p>
                <Button trash onClick={() => deleteRecipe(r)} type="button">
                  Delete Recipe
                </Button>
              </>
            ) : (
              <Button primary onClick={() => saveRecipe(r)} type="button">
                Add Recipe
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

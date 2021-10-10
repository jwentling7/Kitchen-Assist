import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeFunctions from "../../helper/RecipeFunctions";
import "./RecipesList.scss";
import { Button } from "../Button.style";

export default function RecipesList(props) {
  const { recipeBook, saveRecipe, deleteRecipe, getList } = RecipeFunctions();

  return (
    <div className="recipes-list">
      {getList(props.listType, props.list).map((r) => (
        <div key={r.key}>
          <RecipeCard recipe={r} />
          <div className="recipes-list__btns">
            {recipeBook.find((recipe) => recipe.key === r.key) ? (
              <>
                <p>Saved in Recipe Book.</p>
                <Button secondary onClick={() => deleteRecipe(r)} type="button">
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

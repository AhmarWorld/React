import './RecipesList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function RecipesList({ recipes }) {
    return (
        <div className="recipes">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}
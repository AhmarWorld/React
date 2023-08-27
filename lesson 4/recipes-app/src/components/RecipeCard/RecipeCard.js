import './RecipeCard.css';

export default function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className='food-card'>
            <div className='food-avatar'>
                <img className='food-img' src={image} alt=":/" />
                <p>Calories: {calories.toFixed()}</p>
            </div>
            <div className='food-receip'>
                <h1>{title}</h1>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
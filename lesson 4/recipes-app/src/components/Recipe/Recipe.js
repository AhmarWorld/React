import './Recipe.css';

export default function Recipe({title,calories,image,ingredients}){
    return(
        <div className={`food-card`}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed()}</p>
            <img className='food-img' src={image} alt=":/" />
        </div>
    )
}